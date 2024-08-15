import db from "../database/database.js";

const saveUrl = (id, originUrl) => {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare(
            "INSERT INTO urls (id, original_url) VALUES (?, ?)"
        );
        stmt.run(id, originUrl, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
        stmt.finalize();
    });
};

const getUrl = (id) => {
    return new Promise((resolve, reject) => {
        db.get(
            "SELECT original_url FROM urls WHERE id = ?",
            [id],
            (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row ? row.original_url : null);
                }
            }
        );
    });
};

export { saveUrl, getUrl };
