import express from 'express';
import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import buyerDescription from '../models/buyer.js';

const router = express.Router();

export const getBuyers = async (req, res) => {
    try {
        const items = await buyerDescription.find();

        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getBuyer = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await buyerDescription.findById(id);

        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const createBuyer = async (req, res) => {
//     const item = req.body
//     const newBuyer = new buyerDescription(item)
//     try {
//         await newBuyer.save();
//         res.status(201).json(newBuyer)
//     } catch (error) {
//         res.status(409).json({ message: error })
//     }
// }


const secret = 'test';

export const loginBuyer = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await buyerDescription.findOne({ email });

        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: oldUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const createBuyer = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const oldUser = await buyerDescription.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await buyerDescription.create({ email, password: hashedPassword, name });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};


export default router;