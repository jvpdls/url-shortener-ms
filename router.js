import express from "express";
import { createShortUrl, redirectUrl } from "./controllers/urlController.js";
import renderHome from "./controllers/pageController.js";

const router = express.Router();

router.post("/api/shorten", createShortUrl);
router.get("/api/get/:id", redirectUrl);
router.get("/", renderHome);
router.use((_req, res) => {
  res.status(404).send({ error: "Page not found." });
});

export default router;
