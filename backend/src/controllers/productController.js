import {productArray} from "../mocks/productArray";

export function getProducts(req, res) {
        res.json(productArray)
}
