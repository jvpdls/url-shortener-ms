import { customAlphabet } from "nanoid";
import { saveUrl, getUrl } from "../models/urlModel.js";

const alphabet = "0123456789";
const nanoid = customAlphabet(alphabet, 4);

const generateShortUrl = async (originUrl) => {
    const id = nanoid();
    await saveUrl(id, originUrl);
    return id;
};

const getOriginUrl = async (id) => {
    return await getUrl(id);
};

export { generateShortUrl, getOriginUrl };
