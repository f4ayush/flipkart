import express from 'express';
import  Product  from '../models/product.js';
import User from '../models/user.js';
import  Cart  from '../models/cart.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'test';
const router = express.Router();

export const getAllProducts =  async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

export const getProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).lean();
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if(token){
        const decoded = jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET);
        const user = await User.findById(decoded.id);
        const cart = await Cart.findOne({ user: user._id }).lean();

        if(cart && cart.items){
          const productArray = cart.items.filter(item=> item.product == req.params.id)
          if(productArray.length){
            product.inCart = true
            console.log(product)
          }
        }
      }
      
      
      if (!product) {
        return res.status(404).send('Product not found');
      }
      res.send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
};

export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const updateProduct =  async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!product) {
        return res.status(404).send('Product not found');
      }
      res.send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
}

export const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      res.send('Product deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
}

export const searchProducts = async (req, res) => {
  try {
    const searchQuery = req.query.q; 
    const filter = {
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { category: { $regex: searchQuery, $options: 'i' } },
      ],
    };
    const products = await Product.find(filter);
    // const products = await Product.find({ $text: { $regex: searchQuery  } });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server 1');
  }
  
};