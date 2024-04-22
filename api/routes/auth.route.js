import express from 'express'
import {Signup} from '../controller/auth.controller.js'
const router = express.Router();

router.post("/signup",Signup)

export default router;