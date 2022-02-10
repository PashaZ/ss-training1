import express from 'express'
const addProductRoute = express.Router()
// const { body,validationResult } = require('express-validator/check');
const urlencodedParser = express.urlencoded({ extended: false })

addProductRoute.post(
    '/products/form',
    urlencodedParser,
    function (req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        } else {
            res.json(req.body)
            console.log('request.body -', req.body)
        }
    }
)
export default addProductRoute
