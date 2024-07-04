import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  DeleteUser,
  GetUser,
  GetUserListings,
  UpdateUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/update/:id", verifyToken, UpdateUser);
router.delete("/delete/:id", verifyToken, DeleteUser);
router.get("/listings/:id", verifyToken, GetUserListings);
router.get("/:id", verifyToken, GetUser);

export default router;
