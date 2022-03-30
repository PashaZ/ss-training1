// import express from 'express';
// import {check, validationResult} from 'express-validator';
// const createProductRoute = express.Router();
// createProductRoute.use(express.json({extended:true}));
// import {productArray} from '../mocks/productArray';

// createProductRoute.post(
//     '/products/form',
//     [
//         check("name", "Empty field name").isLength({min: 1}),
//         check("price", "Empty field price").isLength({min: 1})
//     ],
//     function async(req, res) {
//         try{
// const errors = validationResult(req)
// if(!errors.isEmpty()){
//     return res.status(400).json({
//      errors: errors.array(),
//      message: "Uncorrect data in field"
//     })
// }
//      productArray.push(req.body)
//      res.json(`Product-${req.body.name} added, thank you!`)
// }
// catch (e){
// res.status(500),json({message: "Something was wrong"})
// }}
// );
// export default createProductRoute ;
