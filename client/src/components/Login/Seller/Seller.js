import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { login, signUp } from '../../../actions/login'
import { useDispatch } from 'react-redux'
import "../login.css"
function Seller() {
    const [sellerDetails, setsellerDetails] = useState({ name: "", email: "", password: "", products: [] })
    const [isSignup, setisSignup] = useState(false)
    const dispatch = useDispatch()
    const handleSignup = () => {
        setisSignup(!isSignup)
    }
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        isSignup ? dispatch(signUp(sellerDetails, history)) : dispatch(login(sellerDetails, history))
    }
    return (
        <div className="form-container" >
            <form className="login-form" onSubmit={handleSubmit}>
                {isSignup && <input type="text" name="name" placeholder="Name" onChange={(e) => setsellerDetails({ ...sellerDetails, name: e.target.value })} />}
                <input type="text" name="email" placeholder="Email" onChange={(e) => setsellerDetails({ ...sellerDetails, email: e.target.value })} />
                <input type="text" name="password" placeholder="Password" onChange={(e) => setsellerDetails({ ...sellerDetails, password: e.target.value })} />
                <button type="submit">{isSignup ? "Register" : "Log In"}</button>
            </form>
            {isSignup ? <p>Already registered? <span onClick={handleSignup}>Log in</span></p> : <p>New here? <span onClick={handleSignup}>Register Now</span></p>}

        </div>
    )
}

export default Seller
