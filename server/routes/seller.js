import express from 'express';
import { createSeller, loginSeller, addProduct } from '../controllers/seller.js'

const router = express.Router();

router.post('/signUp', createSeller)
router.post('/login', loginSeller)
router.post('/addProduct', addProduct)

export default router;