import express from 'express';
import { createSeller, loginSeller } from '../controllers/seller.js'

const router = express.Router();

router.post('/signUp', createSeller)
router.post('/login', loginSeller)

export default router;