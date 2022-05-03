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
// ---------------------------------------------------------
const {graphqlHTTP}= require ('express-graphql')
const schema =require('./schema/schema')
const products =[{id:1,name:"Apple", price:"10", statusValue:"active"},
{id:2,name:"Mango", price:"5", statusValue:"active"}]

const root = {
  getAll:()=>{
    return products
  },
  getOne:({id})=>{
    return products.find(product=>product.id==id)
  }
}
// -------------------------------------------------------------
app.use(cors("*"));
app.use(express.json({ extended: true }));
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload());
// ----------------------------------------------------------------
app.use('/graphql', graphqlHTTP({graphiql:true,
schema,
rootValue: root
}))
// -------------------------------------------------------------------
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
