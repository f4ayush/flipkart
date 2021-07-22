import React, { useState, useEffect } from 'react'
import { addProduct } from '../../api/index'
import { useHistory } from 'react-router-dom'
import FileBase from 'react-file-base64';
import SellerProducts from "../Products/SellerProducts";
import { editProduct, products } from '../../actions/sellerProducts'
import { useDispatch } from 'react-redux';

export default function Admin() {
    const [userId, setuserId] = useState(JSON.parse(localStorage.getItem('profile'))?.result._id)
    const [product, setproduct] = useState({ name: "", price: "", description: "", image: "", userId: userId, productKey: "" })
    const [isEdit, setisEdit] = useState(false)
    const history = useHistory()
    // const userId = JSON.parse(localStorage.getItem('profile'))?.result._id
    console.log(userId)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(userId)
        dispatch(products(userId));
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault()
        // setproduct({ ...product, userId })
        if (isEdit) {
            dispatch(editProduct(product))
        } else {
            addProduct(product)
            console.log(product)
        }
        setproduct({ name: "", price: "", description: "", image: "", userId })
    }

    const fillForm = (name, price, description, key) => {
        setproduct({ ...product, name, price, description, key })
        setisEdit(true)
    }
    return (
        <>
            {/* if not log in show welcome screen else show add products */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={product.name} placeholder="Item name" onChange={(e) => setproduct({ ...product, name: e.target.value })} />
                <input type="text" name="price" value={product.price} placeholder="Item price" onChange={(e) => setproduct({ ...product, price: e.target.value })} />
                <input type="text" name="description" value={product.description} placeholder="Item description" onChange={(e) => setproduct({ ...product, description: e.target.value })} />
                <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setproduct({ ...product, image: base64 })} /></div>
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
            </form>

            <SellerProducts fillForm={fillForm} />
        </>
    )
}
