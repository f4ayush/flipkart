import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from "../../actions/sellerProducts";

export default function SellerProducts({ fillForm }) {
    const products = useSelector(state => state.sellerProducts)
    const userId = JSON.parse(localStorage.getItem('profile'))?.result._id
    const dispatch = useDispatch()

    return (
        <div className="product-container">
            {
                products.map(product => {
                    return <div key={product.key} className="cards">
                        <p className="product-name">{product.name}</p>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <img className="product-image" src={product.image} alt="" />
                        <button className="edit" onClick={() => fillForm(product.name, product.price, product.description, product.key)}>Edit</button>
                        <button className="delete" onClick={() => { dispatch(deleteProduct(userId, product.key)) }}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}
