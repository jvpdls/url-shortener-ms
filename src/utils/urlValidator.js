import { URL } from "url";

const stringIsAvalidUrl = (s) => {
    try {
        new URL(s);
        return true;
    } catch (err) {
        return false;
    }
};

const isAvalidUrl = (url) => {
    if (!url || !stringIsAvalidUrl(url)) {
        return false;
    } else {
        return true;
    }
};

export default isAvalidUrl;
