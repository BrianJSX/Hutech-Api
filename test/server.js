const express = require("express");
const Hutech = require("../index");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  let response = await Hutech.getInfoStudent("1811060485", "vip123456");
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
