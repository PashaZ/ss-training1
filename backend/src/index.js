require("dotenv").config();
// if (process.env.NODE_ENV !== 'test' && dotenv.error) throw dotenv.error
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
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
// app.get('/api', (req, res)=>{
//     res.status(200).json({message:"WORKING !"})})
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

// ---------------------------------------------------------------
// import express from 'express'
// import router from './routes/productsRoute'
// import cors from 'cors'
// import productRoute from './routes/productRoute'
// import createProductRoute from './routes/createProductRoute'
// //

// const app = express()
// const PORT = process.env.PORT || 8080

// app.use(cors('*'))

// app.use('/api', router)
// app.use('/api', productRoute)
// app.use('/api', createProductRoute)

// app.listen(PORT, console.log(`listening on port ${PORT}`))
