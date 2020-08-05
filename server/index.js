const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("../routes");
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1", router);

module.exports = { app, PORT };