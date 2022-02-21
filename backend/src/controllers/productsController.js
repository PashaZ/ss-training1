const { json } = require('../db')
const { Product } = require('../models/models')

class ProductsController {
    async create(req, res) {
        try {
            const { name, price, id } = req.body
            const createProduct = await Product.create({ name, price, id })
            return res.json(createProduct)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        const getProducts = await Product.findAll()
        return res.json(getProducts)
    }
    async getOne(req, res) {
        const { id } = req.params
        const getProduct = await Product.findOne({
            where: { id },
        })
        return res.json(getProduct)
    }
    //
    //     async check(req, res){
    // const query = req.query
    // res.json(query)
    //     }
    //
}
module.exports = new ProductsController()











// import {productArray} from "../mocks/productArray";

// export function getProducts(req, res) {
//         res.json(productArray)
// }
