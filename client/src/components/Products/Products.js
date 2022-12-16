import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';
import "./products.css"

export default function Products() {
    const products = useSelector(state => state.allProducts)
    const login = localStorage.getItem('profile')
    const [buyProduct, setbuyProduct] = useState({})
    const [showProduct, setshowProduct] = useState(false)
    const handleClick = (product) => {
        setbuyProduct(product)
        setshowProduct(true)
        window.scrollTo(0, 0)
    }
    return (
        <div className="product-container">
            {products &&
                products.map(product => {
                    return <div key={uuidv4()} className="cards">
                        <img className="product-image" src={product.image} alt="" />
                        <p className="product-name">{product.name}</p>
                        <p className="product-description" >{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        {login && <button className="buy-button" onClick={() => handleClick(product)}>Buy Now</button>}
                    </div>
                })
            }

            {showProduct && <Product setshowProduct={setshowProduct} product={buyProduct} />}
        </div>
    )
}
