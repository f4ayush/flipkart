import express from 'express';
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';

import sellerDescription from '../models/seller.js';

const router = express.Router();

// export const getProducts = async (req, res) => {
//     try {
//         const items = await sellerDescription.find();
//         console.log(items)
//         res.status(200).json(items);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const getProducts = async (req, res) => {
    const { userId } = req.body;
    console.log(req.body)
    try {
        const seller = await sellerDescription.findById(userId);
        console.log()
        res.status(200).json(seller.products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const { sellerId, productId } = req.body;

    // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    console.log(req.body)
    const seller = await sellerDescription.findById(sellerId);
    seller.products = seller.products.filter(product => product.key !== productId);
    await sellerDescription.findByIdAndUpdate(sellerId, seller, { new: true })

    res.json({ message: "Product deleted successfully." });
}

export const editProduct = async (req, res) => {
    const { name, price, description, key, userId } = req.body
    const seller = await sellerDescription.findById(userId)
    seller.products = seller.products.map(product => {
        if (product.key === key) {
            console.log(product)
            product = { ...product, name, price, description }
            console.log(product)
        }
        return product
    })
    await sellerDescription.findByIdAndUpdate(userId, seller, { new: true })
    res.json(seller.products)
}


export const addProduct = async (req, res) => {
    const { name, price, description, userId, image } = req.body;
    console.log(req.body)
    // if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No user with id: ${userId}`);

    try {
        const seller = await sellerDescription.findById(userId);
        // console.log(seller)
        // let key = seller.products.length
        seller.products.push({ key: uuidv4(), name, price, description, image })

        await sellerDescription.findByIdAndUpdate(userId, seller, { new: true })
        res.json(seller)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const getAllProducts = async (req, res) => {
    try {
        const sellers = await sellerDescription.find();
        const products = sellers.map(seller => seller.products)
        res.send(products)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


const secret = 'test';

export const loginSeller = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await sellerDescription.findOne({ email });

        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: oldUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const createSeller = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const oldUser = await sellerDescription.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await sellerDescription.create({ email, password: hashedPassword, name });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};


export default router;