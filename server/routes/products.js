import express from 'express';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct, searchProducts } from '../controllers/product.js'

const router = express.Router();

router.get('/search',searchProducts)
router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;