import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { loginBuyer, signUpBuyer } from '../../../actions/login'
import { useDispatch } from 'react-redux'
import "../login.css"

function Buyer() {
    const [buyerDetails, setbuyerDetails] = useState({ name: "", email: "", password: "" })
    const [isSignup, setisSignup] = useState(false)
    const dispatch = useDispatch()
    const handleSignup = () => {
        setisSignup(!isSignup)
    }
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        isSignup ? dispatch(signUpBuyer(buyerDetails, history)) : dispatch(loginBuyer(buyerDetails, history))
    }
    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                {isSignup && <input type="text" name="name" placeholder="Name" onChange={(e) => setbuyerDetails({ ...buyerDetails, name: e.target.value })} />}
                <input type="text" name="email" placeholder="Email" onChange={(e) => setbuyerDetails({ ...buyerDetails, email: e.target.value })} />
                <input type="text" name="password" placeholder="Password" onChange={(e) => setbuyerDetails({ ...buyerDetails, password: e.target.value })} />
                <button type="submit">{isSignup ? "Register" : "Log In"}</button>
            </form>
            {isSignup ? <p>Already registered? <span onClick={handleSignup}>Log in</span></p> : <p>New here? <span onClick={handleSignup}>Register Now</span></p>}

        </div>
    )
}

export default Buyer
