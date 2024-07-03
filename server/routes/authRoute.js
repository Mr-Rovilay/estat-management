import express from "express";
import {
  Google,
  SignOut,
  Signin,
  Signup,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/google", Google);
router.get("/signout", SignOut);
export default router;
