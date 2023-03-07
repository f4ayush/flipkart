import express from 'express';
import { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder, makeOrder, verifyOrder } from '../controllers/orders.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = express.Router();

router.get('/', checkAuth, getAllOrders)
router.get('/:id', checkAuth, getOrder)
router.post('/', checkAuth, createOrder)
router.put('/:id', checkAuth, updateOrder)
router.delete('/:id', checkAuth, deleteOrder)


router.post("/orders",makeOrder );

router.post("/verify", verifyOrder);



export default router;