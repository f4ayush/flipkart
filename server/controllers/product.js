import express from 'express';
import  Product  from '../models/product.js';

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
      const product = await Product.findById(req.params.id);
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
export default router;