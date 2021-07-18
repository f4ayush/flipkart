import express from 'express';
import { loginBuyer, createBuyer } from '../controllers/buyer.js'

const router = express.Router();

router.post('/signUp', createBuyer)
router.post('/login', loginBuyer)

export default router;