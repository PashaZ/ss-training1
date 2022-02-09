import React, { useState } from 'react'

export default function FormOfProduct() {
    const [product, setProduct] = useState({
        productName: '',
        price: '',
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = (event) => {
        if (product.productName === '' || !product.price) {
            alert('Write all fields!')
            return
        } else event.preventDefault()
        createNewProduct(product)
    }

    const createNewProduct = async (product) => {
        const url = 'http://localhost:8080/api/' //example url
        const fetchData = {
            method: 'POST',
            body: product,
            headers: new Headers(),
        }
        try {
            const request = async () => {
                const res = await fetch(url, fetchData)
                const data = await res.json()
                if (!res.ok) {
                    throw new Error(data)
                }
            }
            if (product) {
                request()
            }
        } catch (error) {
            return error
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Name of product</span>
                <input
                    type="text"
                    name="productName"
                    onChange={handleChange}
                ></input>
            </label>
            <label>
                <span>Price of product</span>
                <input name="price" type="text" onChange={handleChange}></input>
            </label>
            <button type="submit">Add product</button>
        </form>
    )
}
