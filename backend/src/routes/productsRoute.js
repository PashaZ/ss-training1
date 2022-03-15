const Router = require('express')
const router = new Router()
const ProductsController = require('../controllers/productsController')

router.post('/products/form', ProductsController.create)
router.get('/products', ProductsController.getAll)
router.get('/products/:id', ProductsController.getOne)
// router.get('/check', ProductsController.check)

module.exports = router

// import express from 'express'
// const router = express.Router()
// import { getProducts } from '../controllers/productsController'

// router.get('/products', getProducts)

// export default router
