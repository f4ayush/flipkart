import React, { useState } from 'react'
import { createSeller } from '../../api/index'
import { useHistory } from 'react-router-dom'

export default function Admin() {
    const [sellerDetails, setsellerDetails] = useState({ name: "", email: "", password: "", products: [] })
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        createSeller(sellerDetails)
        history.push("/seller")
    }
    return (
        <>
            {/* if not log in show welcome screen else show add products */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Item name" onChange={(e) => setsellerDetails({ ...sellerDetails, name: e.target.value })} />
                <input type="text" name="email" placeholder="Item price" onChange={(e) => setsellerDetails({ ...sellerDetails, email: e.target.value })} />
                <input type="text" name="password" placeholder="Item description" onChange={(e) => setsellerDetails({ ...sellerDetails, password: e.target.value })} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
