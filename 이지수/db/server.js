const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

let conn;
let sql;

const info = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}

conn = mysql.createConnection(info);

// function handleDisconnect(){
//   conn = mysql.createConnection(info);
//   conn.connect((err,result, fields)=>{
//     if(err){
//       console.log("error message:" + err);
//       setTimeout(handleDisconnect, 2000);
//     };
//   });

//   conn.on("error", (err)=>{
//     console.log("db error" + err);
//     if(err.conde === "PROTOCOL_CONNECTION_LOST"){
//       handleDisconnect();
//     }else{
//       throw err;
//     }
//   })
// }

// handleDisconnect()

app.listen(PORT, ()=>{
  console.log("START EXPRESS SERVER< PROT NUMBER:" + PORT);
})