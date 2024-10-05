import { insertUrl, fetchUrl } from "../models/urlModel.js";
import isAvalidUrl from "../utils/urlValidator.js";

const createShortUrl = async (req, res) => {
    const { originUrl } = req.body;

    if (!isAvalidUrl(originUrl)) {
        return res.status(400).send({ error: "A valid URL is required." });
    }

    try {
        const id = await insertUrl(originUrl);
        res.status(201).send({
            id: id,
            shortUrl: `${process.env.HOST}api/${id}`,
        });
    } catch (error) {
        res.status(500).send("Error while generating a short URL.");
    }
};

const redirectUrl = async (req, res) => {
    const { id } = req.params;
    try {
        const originUrl = await fetchUrl(id);
        if (originUrl) {
            console.log(`Redirecting to ${originUrl}`);
            res.redirect(originUrl);
        } else {
            res.status(404).send({ error: "URL not found." });
        }
    } catch (error) {
        res.status(500).send("Redirect error.");
    }
};

export { createShortUrl, redirectUrl };
