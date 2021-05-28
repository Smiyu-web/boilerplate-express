var express = require("express");
var app = express();
require("dotenv").config();

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

const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time,
  });
});

module.exports = app;
