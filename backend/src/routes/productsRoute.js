const Router = require("express");
const router = new Router();
const ProductsController = require("../controllers/productsController");

router.post("/products/form", ProductsController.create);
router.get("/products", ProductsController.getAll);
router.get("/products/:id", ProductsController.getOne);
router.patch("/products/statusUpdate/:id", ProductsController.update);

module.exports = router;
