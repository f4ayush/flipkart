import express from 'express';
import  Order  from '../models/order.js';

const router = express.Router();

export const getAllOrders =  async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user._id });
      res.send(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };

export const getOrder = async (req, res) => {
    try {
      const order = await Order.findOne({ _id: req.params.id, user: req.user._id });
      if (!order) {
        return res.status(404).send('Order not found');
      }
      res.send(order);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
};

export const createOrder = async (req, res) => {
    try {
      const order = new Order({
        ...req.body,
        user: req.user._id
      });
      await order.save();
      res.send(order);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
};

export const updateOrder =  async (req, res) => {
    try {
      const order = await Order.findOne({ _id: req.params.id, user: req.user._id });
      if (!order) {
        return res.status(404).send('Order not found');
      }
      order.status = req.body.status;
      await order.save();
      res.send(order);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
}

export const deleteOrder = async (req, res) => {
    try {
      const order = await Order.findOne({ _id: req.params.id, user: req.user._id });
      if (!order) {
        return res.status(404).send('Order not found');
      }
      await order.remove();
      res.send('Order removed successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
}
export default router;