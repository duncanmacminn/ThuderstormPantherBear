const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/registerdata", (req, res) => {

  var mysql = require("mysql");
  var con = mysql.createConnection({
    host: "localhost",
    user: "Crystal",
    password: "MentoS69&",
    database: "travelexperts",
  });

  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  res.send("<h1>Working</h1>");
});

app.use(
  express.static("public", {
    extensions: ["html"],
  })
);

app.use((req, res, next) => {
  res.status(404).send("<h2>Nooooooooo! Go back! GO BACK!!!</h2>");
});

app.listen(8000, (err) => {
  if (err) throw err;
  console.log("Server is listening...");
});
