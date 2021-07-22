import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from "../../actions/sellerProducts";

export default function SellerProducts({ fillForm }) {
    const products = useSelector(state => state.sellerProducts)
    const userId = JSON.parse(localStorage.getItem('profile'))?.result._id
    const dispatch = useDispatch()

    const editProduct = () => {

    }
    return (
        <div>
            {console.log(products)}
            {
                products.map(product => {
                    return <div key={product.key}>
                        <p>{product.name}</p>
                        <p>{product.desc}</p>
                        <p>{product.price}</p>
                        <img src={product.image} alt="" />
                        <button onClick={() => fillForm(product.name, product.price, product.description, product.key)}>Edit</button>
                        <button onClick={() => { dispatch(deleteProduct(userId, product.key)) }}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}
