import dotenv from "dotenv"; //Probramatically get env variables from .env file
import express, { response } from "express";
import next from "next";

//GET ENVIRONMENT VARIABLES
dotenv.config();
const { DATABASE_URL, PORT, NODE_ENV } = process.env;
console.log(DATABASE_URL)
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Express Server listening on http://localhost: ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(error.message);
    console.error(ex.stack);
    process.exit(1);
  });
