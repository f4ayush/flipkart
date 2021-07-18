import express from 'express';
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

// export const getSeller = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const item = await sellerDescription.findById(id);

//         res.status(200).json(item);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// export const updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

//     const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//     await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }

export const addProduct = async (req, res) => {
    const { name, price, description, userId, image } = req.body;
    console.log(req.body)
    // if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No user with id: ${userId}`);

    try {
        const seller = await sellerDescription.findById(userId);
        // console.log(seller)
        let key = seller.products.length
        seller.products.push({ key: key + 1, name, price, description, image })

        await sellerDescription.findByIdAndUpdate(userId, seller, { new: true })
        res.json(seller)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const getProducts = async (req, res) => {
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