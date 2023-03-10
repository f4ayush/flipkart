import express from 'express';
import { placeOrder } from '../controllers/checkout.js'
import {verifyOrder, makePayment} from '../controllers/payment.js'
import checkAuth from '../middlewares/checkAuth.js'
const router = express.Router();

router.post('/verify',checkAuth, verifyOrder, placeOrder)
router.post('/makePayment',checkAuth, makePayment)


export default router;