import React from 'react'
import { useSelector } from 'react-redux'

export default function SellerProducts() {
    const products = useSelector(state => state.sellerProducts[0])
    return (
        <div>
            {console.log(products)}
            {
                products.map(product => {
                    return <div>
                        <p>{product.name}</p>
                        <p>{product.desc}</p>
                        <p>{product.price}</p>
                        <img src={product.image} alt="" />
                        <button>Buy Now</button>
                    </div>
                })
            }
        </div>
    )
}
