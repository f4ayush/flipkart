import express from 'express';
import { createSeller, loginSeller, addProduct, getAllProducts, getProducts, deleteProduct } from '../controllers/seller.js'

const router = express.Router();

router.post('/signUp', createSeller)
router.post('/login', loginSeller)
router.post('/addProduct', addProduct)
router.get('/allProducts', getAllProducts)
router.post('/sellerProducts', getProducts)
router.post('/deleteProduct', deleteProduct)

export default router;