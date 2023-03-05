import express from 'express';
import Cart  from '../models/cart.js';
import Order  from '../models/order.js';
import Product  from '../models/product.js';

const router = express.Router();

export const placeOrder = async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
      if (!cart) {
        return res.status(404).send({ message: 'Cart not found' });
      }
  
      const order = new Order({
        user: req.user._id,
        items: cart.items.map((item) => ({
          product: item.product,
          quantity: item.quantity,
          price: item.price
        })),
        totalPrice: cart.items.reduce((total, item) => total + item.price, 0)
      });
  
      const savedOrder = await order.save();
  
      // Clear the user's cart
      cart.items = [];
      await cart.save();
  
      res.status(201).send(savedOrder);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
    }
}

export const getOrderHistory = async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user._id });
      res.send(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
    }
}

export default router;