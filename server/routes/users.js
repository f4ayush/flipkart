import express from 'express';
import { login, signup } from '../controllers/users.js'

const router = express.Router();

router.post('/login', login)
router.post('/sign-up', signup)


export default router;