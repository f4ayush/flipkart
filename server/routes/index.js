import express from 'express';
const router = express.Router();

router.use('/products', require('./products'));
// router.use('/users', require('./users'));
router.use('/orders', require('./orders'))
// router.use('/cart', require('./cart'))
// router.use('/checkout', require('./checkout'))
module.exports = router;