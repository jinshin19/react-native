const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const con = mysql.createConnection({
  user: "root",
  password: "localhost123@",
  database: "react_native",
  host: "localhost",
});

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.listen(5000, console.log("server is running"));

app.get("/todos", async (request, response) => {
  con.query("select * from todos", (err, result) => {
    return response.status(200).send({
      data: result,
    });
  });
});

app.post("/todos", async (request, response) => {

  const { title, description } = await request.body

  con.query("insert into todos ( title, description ) values ( ? )", [[title, description]], (err, result) => {
    return response.status(200).send({
      message: "New todo is created",
    });
  });
});
