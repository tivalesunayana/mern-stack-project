import express from "express";
// import {
//   test,
//   updateUser,
//   deleteUser,
// } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyToken.js";
import { deleteUser, test, updateUser } from "../controller/user.controller.js";

const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
