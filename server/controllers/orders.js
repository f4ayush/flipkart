import express from 'express';
import  Order  from '../models/order.js';
import Razorpay from "razorpay";
import crypto from "crypto";



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


export const makeOrder = async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
}


export const verifyOrder =async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
      createOrder(req, res)
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
        
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
}


