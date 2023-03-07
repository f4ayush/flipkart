import express from 'express';
import { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../controllers/orders.js'
import checkAuth from '../middlewares/checkAuth.js'
const router = express.Router();

router.get('/', checkAuth, getAllOrders)
router.get('/:id', checkAuth, getOrder)
router.post('/', checkAuth, createOrder)
router.put('/:id', checkAuth, updateOrder)
router.delete('/:id', checkAuth, deleteOrder)

export default router;