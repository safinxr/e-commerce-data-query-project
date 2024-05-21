import "dotenv/config";

const port = process.env.PORT;
const db_url = process.env.DB_URL;

export { port, db_url };
