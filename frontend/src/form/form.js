import React, { useState } from 'react'

export default function FormOfProduct() {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        switch (name) {
            case 'productName':
                setProductName(value)
                break

            case 'price':
                setPrice(value)
                break
            default:
                return
        }
    }
    return (
        <form>
            <label>
                <span>Name of product</span>
                <input
                    type="text"
                    name="productName"
                    onChange={handleChange}
                    value={productName}
                ></input>
            </label>

            <label>
                <span>Price of product</span>
                <input
                    name="price"
                    type="text"
                    value={price}
                    onChange={handleChange}
                ></input>
            </label>

            <button type="submit">Add product</button>
        </form>
    )
}
