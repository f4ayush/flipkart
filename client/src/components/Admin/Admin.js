import React, { useState } from 'react'
import { addProduct } from '../../api/index'
import { useHistory } from 'react-router-dom'
import FileBase from 'react-file-base64';
import SellerProducts from "../Products/SellerProducts";

export default function Admin() {
    const [sellerDetails, setsellerDetails] = useState({ name: "", price: "", description: "", image: "", userId: "" })
    const history = useHistory()
    const userId = JSON.parse(localStorage.getItem('profile'))?.result._id
    const handleSubmit = (e) => {
        e.preventDefault()

        setsellerDetails({ ...sellerDetails, userId })

        addProduct(sellerDetails)
        console.log(sellerDetails)
        setsellerDetails({ name: "", price: "", description: "", image: "" })
    }
    return (
        <>
            {/* if not log in show welcome screen else show add products */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Item name" onChange={(e) => setsellerDetails({ ...sellerDetails, name: e.target.value })} />
                <input type="text" name="price" placeholder="Item price" onChange={(e) => setsellerDetails({ ...sellerDetails, price: e.target.value })} />
                <input type="text" name="description" placeholder="Item description" onChange={(e) => setsellerDetails({ ...sellerDetails, description: e.target.value })} />
                <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setsellerDetails({ ...sellerDetails, image: base64 })} /></div>
                <button type="submit">Submit</button>
            </form>

            <SellerProducts />
        </>
    )
}
