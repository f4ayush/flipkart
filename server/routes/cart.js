import express from 'express';
import { getAllCartItems, createCartItem, updateCartItem, deleteCartItem } from '../controllers/cart.js'

const router = express.Router();

router.get('/', getAllCartItems)
router.post('/', createCartItem)
router.put('/:id', updateCartItem)
router.delete('/:id', deleteCartItem)

export default router;