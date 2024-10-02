import { generateShortUrl, getOriginUrl } from "../services/urlService.js";
import isAvalidUrl from "../utils/urlValidator.js";

const createShortUrl = async (req, res) => {
    const { originUrl } = req.body;

    if (!isAvalidUrl(originUrl)) {
        return res.status(400).send({ error: "A valid URL is required." });
    }

    try {
        const id = await generateShortUrl(originUrl);
        res.status(201).send({
            id: id,
            shortUrl: `${process.env.HOST}api/get/${id}`,
        });
    } catch (error) {
        res.status(500).send("Error while generating a short URL.");
    }
};

const redirectUrl = async (req, res) => {
    const { id } = req.params;
    try {
        const originUrl = await getOriginUrl(id);
        if (originUrl) {
            res.redirect(originUrl);
        } else {
            res.status(404).send({ error: "URL not found." });
        }
    } catch (error) {
        res.status(500).send("Redirect error.");
    }
};

export { createShortUrl, redirectUrl };
