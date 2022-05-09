const express = require("express");
const Hutech = require("../index");
const cors = require('cors')
require("dotenv").config();


const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.post("/getPoint", async (req, res) => {
  try {
    const { username, password } = req.query;
    let response = await Hutech.getPoint(username, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(err);
  }
});

app.post("/getInfoStudent", async (req, res) => {
  try {
    const { username, password } = req.query;
    let response = await Hutech.getInfoStudent(username, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(err);
  }
});


app.post("/getSchedulPersonal", async (req, res) => {
  try {
    const { username, password } = req.query;
    let response = await Hutech.getSchedulePersonal(username, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(err);
  }
});


app.post("/getScheduleWeek", async (req, res) => {
  try {
    const { username, password } = req.query;
    let response = await Hutech.getScheduleWeek(username, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
