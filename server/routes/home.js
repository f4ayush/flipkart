import express from 'express';
import { getProducts } from '../controllers/seller.js'

const router = express.Router();

router.get('/', getProducts)
// router.get('/', getItems)

export default router;