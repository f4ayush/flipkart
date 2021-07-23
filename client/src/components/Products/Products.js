import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';

export default function Products() {
    const products = useSelector(state => state.allProducts[0])
    const login = localStorage.getItem('profile')
    const [buyProduct, setbuyProduct] = useState({})
    const [showProduct, setshowProduct] = useState(false)
    const handleClick = (product) => {
        setbuyProduct(product)
        setshowProduct(true)
    }
    console.log(login)
    return (
        <div>
            {/* {console.log(products)} */}
            {products &&
                products.map(product => {
                    return <div key={uuidv4()}>
                        <p>{product.name}</p>
                        <p>{product.desc}</p>
                        <p>{product.price}</p>
                        <img src={product.image} alt="" />
                        {login && <button onClick={() => handleClick(product)}>Buy Now</button>}
                    </div>
                })
            }

            {showProduct && <div><Product setshowProduct={setshowProduct} product={buyProduct} /></div>}
        </div>
    )
}
