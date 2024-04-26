import express from "express";
import { Signin, Signup } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);

export default router;
