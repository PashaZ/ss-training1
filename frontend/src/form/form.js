import React, { useState } from 'react'

export default function FormOfProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setProduct({ ...product, [name]: value })
    }
    const handleSubmit = (event) => {
        if (product.name === '' || !product.price) {
            alert('Write all fields!')
        } else {
            event.preventDefault()
            createNewProduct(product)
        }
    }

    const createNewProduct = async () => {
        const url = 'http://localhost:8080/api/products/form'
        const fetchData = {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const request = async () => {
            const res = await fetch(url, fetchData)
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.message || 'Something was wrong')
            }
            return data
        }

        try {
            if (product) {
                request()
            }
        } catch (error) {
            return error.message
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Name of product</span>
                <input type="text" name="name" onChange={handleChange}></input>
            </label>
            <label>
                <span>Price of product</span>
                <input name="price" type="text" onChange={handleChange}></input>
            </label>
            <button type="submit">Add product</button>
        </form>
    )
}
