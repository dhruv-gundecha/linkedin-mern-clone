import express from "express";
import { getFeedJobs, getUserJobs, likeJob } from "../controllers/jobs.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedJobs);
router.get("/:userId/jobs", verifyToken, getUserJobs);

/* UPDATE */
router.patch("/:id/like", verifyToken, likeJob);

export default router;
