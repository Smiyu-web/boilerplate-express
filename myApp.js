var express = require("express");
var app = express();
require("dotenv").config();
var bodyParser = require("body-parser");

// console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

// app.use("/public", express.static(__dirname + "/public"));

// app.get("/json", (req, res) => {
//   res.json({
//     message: "Hello json",
//   });
// });

// if (process.env.MESSAGE_STYLE === "uppercase") {
//   app.get("/json", (req, res) => {
//     return res.json({ message: "HELLO JSON" });
//   });
// } else {
//   app.get("/json", (req, res) => {
//     return res.json({ message: "Hello json" });
//   });
// }

// app.get("/json", (req, res) => {
//   process.env.MESSAGE_STYLE === "uppercase"
//     ? res.json({ message: "HELLO JSON" })
//     : res.json({ message: "Hello json" });
// });

// app.use((req, res, next) => {
//   console.log(req.method + " " + req.path + " - " + req.ip);
//   next();
// });

// const middleware = (req, res, next) => {
//   req.time = new Date().toString();
//   next();
// };

// app.get("/now", middleware, (req, res) => {
//   res.send({
//     time: req.time,
//   });
// });

// app.get("/:word/echo", (req, res) => {
//   const { word } = req.params;
//   res.json({
//     echo: word,
//   });
// });

// app.get("/name", function (req, res) {
//   var firstName = req.query.first;
//   var lastName = req.query.last;
//   // OR you can destructure and rename the keys
//   var { first: firstName, last: lastName } = req.query;
//   // Use template literals to form a formatted string
//   res.json({
//     name: `${firstName} ${lastName}`,
//   });
// });

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.post("/name", function (req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});
module.exports = app;
