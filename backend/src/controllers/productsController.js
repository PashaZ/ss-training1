const { json } = require('../db')
const { Product } = require('../models/models')
const uuid = require('uuid')
const path = require('path')
class ProductsController {
    async create(req, res) {
        try {
         if(!req){
         return res.status(400).json({
         message: "Uncorrect data in field"
    })
}
else {
            const { name, price, id} = await req.body
            ////////////////////////////
            const {img} = await req.files
            let fileName = uuid.v4()+".jpg"  
            // console.log("fileName --", fileName);
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            // console.log("this is img--", img);
            ////////////////////////////
            const createProduct = await Product.create({ name, price, id, img: fileName})
            return res.json(`Product-${name} added, thank you!`)
            // return res.json(createProduct)
        }}
         catch (e) {
                res.status(500),json({message: "Something was wrong"})
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
