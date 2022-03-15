import React, { useState } from 'react'

export default function FormOfProduct() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [img, setFile] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        createNewProduct()
    }

    const selectFile = (event) => {
        setFile(event.target.files[0])
    }
    const nameChange = (event) => {
        setName(event.target.value)
    }
    const priceChange = (event) => {
        setPrice(event.target.value)
    }
    const createNewProduct = () => {
        const product = new FormData()
        product.append('name', name)
        product.append('price', price)
        product.append('img', img)

        const url = 'http://localhost:8080/api/products/form'
        const fetchData = {
            method: 'POST',
            body: product,
            'Content-Type': 'multipart/form-data',
        }

        const request = async () => {
            const res = await fetch(url, fetchData)
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.message || 'Something was wrong')
            }
            return alert(data)
        }
        try {
            if (fetchData) {
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
                <input type="text" value={name} onChange={nameChange}></input>
            </label>
            <label>
                <span>Price of product</span>
                <input value={price} type="text" onChange={priceChange}></input>
            </label>
            <label>
                <br />
                <input type="file" onChange={selectFile}></input>
            </label>
            <button type="submit">Add product</button>
        </form>
    )
}
