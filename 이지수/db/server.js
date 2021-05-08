const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");
const api = require("./api");
const cors = require("cors");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 80;
const app = express();

let conn;
let sql;

app.use(express.json());
app.use(cors({
  origin:[
    "http://localhost:3000",
    "http://localhost:80",
    "http://54.180.85.4",
    "http://feedbacker.club",
    "https://feedbacker.club",
    "http://www.feedbacker.club",
    "https://www.feedbacker.club"
  ],
  credentials: true
}))

app.use("/api", api);
app.use('/', express.static(path.join(path.resolve(), "./dist")));
app.get("*", (req,res) => {
  res.sendFile(path.resolve(path.resolve(),"dist", "index.html"))
});

app.listen(PORT, ()=>{
  console.log("START EXPRESS SERVER : PORT NUMBER:" + PORT);
})