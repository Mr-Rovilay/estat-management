import express from "express";

import { verifyToken } from "../utils/verifyUser.js";
import {
  CreateListing,
  DeleteListing,
  GetListing,
  GetListings,
  UpdateListing,
} from "../controllers/listingControllers.js";

const router = express.Router();

router.post("/create", verifyToken, CreateListing);
router.delete("/delete/:id", verifyToken, DeleteListing);
router.post("/update/:id", verifyToken, UpdateListing);
router.get("/get/:id", GetListing);
router.get("/get", GetListings);

export default router;
