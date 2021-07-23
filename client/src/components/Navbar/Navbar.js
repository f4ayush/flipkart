import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux'
import * as actionType from '../../constants/sellerActionTypes';
function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();


    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <div style={{ display: 'flex', justifyContent: "space-around" }}>
            <Link to="/">E-Commerce</Link>
            <div className="button-container">
                {user ? <button onClick={logout}>Log Out</button>
                    :
                    <div>
                        <Link to="/login" ><button>LogIn</button></Link>
                        <Link to="/loginSeller" ><button>Seller</button></Link>
                    </div>
                }

            </div>
        </div>
    )
}

export default Navbar
