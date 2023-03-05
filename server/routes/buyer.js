import express from 'express';
import { loginBuyer, createBuyer, getProduct } from '../controllers/buyer.js'

const router = express.Router();

router.post('/signUp', createBuyer)
router.post('/login', loginBuyer)
router.post('/getProduct', getProduct)

export default router;