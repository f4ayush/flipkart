import express from 'express';
import products from './products.js';
import orders from './orders.js';
const router = express.Router();

router.use('/products', products);
// router.use('/users', users);
router.use('/orders', orders)
// router.use('/cart', cart)
// router.use('/checkout', checkout)
export default router;
