import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;
const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ssl: false,
};

const db = new Pool(configDatabase);

export default db;
