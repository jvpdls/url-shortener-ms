import express from "express";
import { createShortUrl, redirectUrl } from "./controllers/urlController.js";
import renderHome from "./controllers/pageController.js";

const router = express.Router();

router.post("/api/shorten", createShortUrl);
router.get("/api/:id", redirectUrl);
router.get("/", renderHome);

export default router;
