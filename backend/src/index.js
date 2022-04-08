require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
// const models = require("./models/models");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
const router = require("./routes/index");
const fileUpload = require("express-fileupload");
const path = require("path");

app.use(cors("*"));
app.use(express.json({ extended: true }));
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload());

app.use("/api", router);
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, console.log(`listening on port ${PORT} !!!`));
  } catch (e) {
    console.log(e);
  }
};
start();
