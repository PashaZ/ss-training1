import express from 'express'
import { check, validationResult } from 'express-validator'
const addProductRoute = express.Router()
addProductRoute.use(express.json({ extended: true }))

addProductRoute.post(
    '/products/form',
    [
        check('name', 'Empty field name').isLength({ min: 1 }),
        check('price', 'Empty field price').isLength({ min: 1 }),
    ],
    function async(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Uncorrect data in field',
                })
            }
            res.json(req.body)
        } catch (e) {
            res.status(500), json({ message: 'Something was wrong' })
        }
    }
)

export default addProductRoute
