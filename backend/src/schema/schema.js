const { buildSchema } = require("graphql")

const schema = buildSchema(`
    
type Products {
    id: ID,
    name: String,
    price: String,
    img:String,
    statusValue:String, 
}
type Query{
    getAll:[Products]
    getOne(id:ID): Products    
}
`)
module.exports = schema