import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FileBase from 'react-file-base64';
import SellerProducts from "../Products/SellerProducts";
import { editProduct, products, addProduct } from '../../actions/sellerProducts'
import { useDispatch } from 'react-redux';
import "./admin.css"

export default function Admin() {
    const [userId, setuserId] = useState(JSON.parse(localStorage.getItem('profile'))?.result._id)
    const [product, setproduct] = useState({ name: "", price: "", description: "", image: "", userId: userId, productKey: "" })
    const [isEdit, setisEdit] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(products(userId));
    }, [dispatch, userId]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEdit) {
            dispatch(editProduct(product))
        } else {
            dispatch(addProduct(product))
        }
        setproduct({ name: "", price: "", description: "", image: "", userId })
    }

    const fillForm = (name, price, description, key) => {
        setproduct({ ...product, name, price, description, key })
        setisEdit(true)
        window.scrollTo(0, 0)
    }

    const reset = () => {
        setproduct({ name: "", price: "", description: "", image: "", userId })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="top">
                    <input type="text" name="name" value={product.name} placeholder="Item name" onChange={(e) => setproduct({ ...product, name: e.target.value })} />
                    <input type="text" name="price" value={product.price} placeholder="Item price" onChange={(e) => setproduct({ ...product, price: e.target.value })} />
                    <input type="text" name="description" value={product.description} placeholder="Item description" onChange={(e) => setproduct({ ...product, description: e.target.value })} />
                </div>
                <div className="lower">
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setproduct({ ...product, image: base64 })} />
                    <button type="submit">Submit</button>
                    <button onClick={reset} type="reset">Cancel</button>
                </div>


            </form>

            <SellerProducts fillForm={fillForm} />
        </>
    )
}
