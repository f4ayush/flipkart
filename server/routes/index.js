import express from 'express';
import products from './products.js';
import orders from './orders.js';
import users from './users.js';
import cart from './cart.js';
// import checkout from './checkout.js';
const router = express.Router();

router.use('/products', products);
router.use('/users', users);
router.use('/orders', orders)
router.use('/cart', cart)
// router.use('/checkout', checkout)
export default router;
