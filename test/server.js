const express = require("express");
const Hutech = require("../index");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  let response = await Hutech.getPoint("1811060485", "lhmdtlla1");
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
