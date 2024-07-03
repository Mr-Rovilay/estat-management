import express from "express";
import { Signin, Signup } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);

export default router;
