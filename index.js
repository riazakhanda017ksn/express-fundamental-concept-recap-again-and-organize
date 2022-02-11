const express = require("express");
const app = express();
app.use(express.json());
const port = 10000;
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./userRoute");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1/", router);

////
////
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello this about page</h1>");
});
// app.get("/*", (req, res) => {
//   res.send("<h1>404 not found</h1>");
// });

app.get("/api/v1/userDataItem", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// app.post("/api/v1/login", (req, res) => {

//   const body = req.body;
//   console.log(body);
//   res.send(`
//   <h1>name  ${body.name} </h1>
//   <h2>email ${body.email} </h2>
//   <h2>pass : ${body.password} </h2>
//   `);
// });

app.listen(port, () => {
  console.log(`server is running on  ${port}`);
});
