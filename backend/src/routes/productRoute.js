import express from 'express'
const router = express.Router()
import { getProducts } from '../controllers/productController'

router.get('/products', getProducts)

export default router
