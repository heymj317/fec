import dotenv from "dotenv";

import postgres from "postgres";

dotenv.config();
const { DB_CONNECTION_URL, PORT, NODE_ENV } = process.env;
const sql = postgres(process.env.DB_CONNECTION_URL);
// postgres("postgres://user:password@host:port/database");

export default async function reservationsHandler(req, res) {
  if (req.method === "GET") {
    try {
      const reservations = await sql`
      SELECT * FROM customers`;
      res.status(200).json({ reservations });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else if (req.method === "POST") {
    try {
      console.log(req.body, "in try post");
      const { prop_id, first_name, last_name, guest_num, startdate, enddate } =
        req.body;
      const reservationMaker = await sql`
  INSERT INTO reservations (prop_id, first_name, last_name, guest_num, startdate, enddate) VALUES (${prop_id}, ${first_name}, ${last_name}, ${guest_num}, ${startdate}, ${enddate}) RETURNING *`;
      res.status(200).json({ reservationMaker });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
