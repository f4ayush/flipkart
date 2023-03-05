import express from 'express';
import  Cart  from '../models/cart.js';

const router = express.Router();

export const getAllCartItems = async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user._id });
      if (!cart) {
        return res.status(404).send('Cart not found');
      }
      res.send(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
};

export const createCartItem = async (req, res) => {
    try {
      let cart = await Cart.findOne({ user: req.user._id });
      if (!cart) {
        cart = new Cart({
          user: req.user._id,
          items: []
        });
      }
      cart.items.push(req.body);
      await cart.save();
      res.send(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
}

export const updateCartItem =  async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user._id });
      if (!cart) {
        return res.status(404).send('Cart not found');
      }
      const itemIndex = cart.items.findIndex(item => item._id == req.params.id);
      if (itemIndex < 0) {
        return res.status(404).send('Cart item not found');
      }
      cart.items[itemIndex] = req.body;
      await cart.save();
      res.send(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
}

export const deleteCartItem = async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user._id });
      if (!cart) {
        return res.status(404).send('Cart not found');
      }
      const itemIndex = cart.items.findIndex(item => item._id == req.params.id);
      if (itemIndex < 0) {
        return res.status(404).send('Cart item not found');
      }
      cart.items.splice(itemIndex, 1);
      await cart.save();
      res.send(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
}
export default router;