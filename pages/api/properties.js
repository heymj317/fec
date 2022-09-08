import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config();
const { DB_CONNECTION_URL, PORT, NODE_ENV } = process.env;
const sql = postgres(process.env.DB_CONNECTION_URL);

// postgres("postgres://user:password@host:port/database");

export default async function propertiesHandler(req, res) {
  if (req.method === "GET") {
    try {
      const properties = await sql`
      SELECT * FROM properties`;
      res.status(200).json({ properties });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
