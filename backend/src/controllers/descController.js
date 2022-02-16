import { productArray } from "../mocks/productArray"

export function descController(req, res) {
    const getPro = productArray.find((product) => product.id === req.params.id)
    res.json(getPro)
}
