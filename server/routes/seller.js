import express from 'express';
import { createSeller, loginSeller, addProduct, getProducts } from '../controllers/seller.js'

const router = express.Router();

router.post('/signUp', createSeller)
router.post('/login', loginSeller)
router.post('/addProduct', addProduct)
router.get('/allProducts', getProducts)

export default router;