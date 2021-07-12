import express from 'express';
import mongoose from 'mongoose';

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

export const createBuyer = async (req, res) => {
    const item = req.body
    const newBuyer = new buyerDescription(item)
    try {
        await newBuyer.save();
        res.status(201).json(newBuyer)
    } catch (error) {
        res.status(409).json({ message: error })
    }
}


export default router;