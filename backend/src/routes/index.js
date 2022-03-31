const Router = require("express");
const router = new Router();
const productsRoute = require("./productsRoute");

router.use("/", productsRoute);

module.exports = router;
