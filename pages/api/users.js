import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config();
const { DB_CONNECTION_URL, PORT, NODE_ENV } = process.env;
const sql = postgres(process.env.DB_CONNECTION_URL);
// const sql = postgres(process.env.DATABASE_URL);
// postgres("postgres://user:password@host:port/database");

export default async function usersHandler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await sql`
      SELECT * FROM customers`;
      res.status(200).json({ users });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
