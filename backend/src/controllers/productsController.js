const { json } = require('../db')
const { Product } = require('../models/models')
const path = require('path')
class ProductsController {
    async create(req, res) {
        try {
            if (!req) {
                return res.status(400).json({
                    message: 'Uncorrect data in field',
                })
            } else {
                const { name, price, id } = await req.body
                const { img } = await req.files
                let fileName = img.name
                img.mv(path.resolve(__dirname, '..', 'static', fileName))

                const createProduct = await Product.create({
                    name,
                    price,
                    id,
                    img: fileName,
                })
                return res.json(`Product-${name} added, thank you!`)
            }
        } catch (e) {
            res.status(500), json({ message: 'Something was wrong' })
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
    //     async check(req, res){
    // const query = req.query
    // res.json(query)
    //     }
}
module.exports = new ProductsController()
