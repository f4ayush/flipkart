import express from 'express';
import { login, signup } from '../controllers/users.js'

const router = express.Router();

router.get('/login', login)
router.get('/sign-up', signup)


export default router;