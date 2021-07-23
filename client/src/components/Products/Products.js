import React from 'react'
import { useSelector } from "react-redux";

export default function Products() {
    const products = useSelector(state => state.allProducts[0])
    const login = localStorage.getItem('profile')
    console.log(login)
    return (
        <div>
            {/* {console.log(products)} */}
            {products &&
                products.map(product => {
                    return <div>
                        <p>{product.name}</p>
                        <p>{product.desc}</p>
                        <p>{product.price}</p>
                        <img src={product.image} alt="" />
                        {login && <button>Buy Now</button>}
                    </div>
                })
            }
        </div>
    )
}
