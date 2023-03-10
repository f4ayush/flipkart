import express from 'express';
import { getAllCartItems, createCartItem, updateCartItem, deleteCartItem } from '../controllers/cart.js'
import checkAuth from '../middlewares/checkAuth.js'
const router = express.Router();

router.get('/',checkAuth, getAllCartItems)
router.post('/',checkAuth, createCartItem)
router.put('/:id',checkAuth, updateCartItem)
router.delete('/:id',checkAuth, deleteCartItem)

export default router;