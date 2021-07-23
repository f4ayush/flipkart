import React from 'react'

export default function Product({ setshowProduct, product }) {
    const handleCancel = () => {
        setshowProduct(false)
    }
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.desc}</p>
            <p>{product.price}</p>
            <img src={product.image} alt="" />
            <button>Buy now</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}
