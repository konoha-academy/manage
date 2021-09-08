import express, { Application, Request, Response } from "express";
import path from "path";
// Boot express
export const app: Application = express();

app.use("/static", express.static(__dirname + "/static"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", (_: Request, res: Response) => {
  res.render("index", { env: process.env["NODE_ENV"] });
});
