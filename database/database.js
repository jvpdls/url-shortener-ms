import path from "path";
import sqlite3 from "sqlite3";

const dbPath = path.join(process.cwd(), "database", "database.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS urls (id TEXT PRIMARY KEY, original_url TEXT)");
});

export default db;
