import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useHistory } from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux'
import * as actionType from '../../constants/sellerActionTypes';
import "./navbar.css"
import { color } from '@mui/system';
function Navbar({show}) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const [sticky, setSticky] = useState(false)

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

    // useEffect(() => {
    //   if(window.scrollTop){
    //     setSticky(true);
    //   }else{
    //     setSticky(false);
    //   }
    //   console.log(window)
    // }, [window.screenX])
    

    return (
        <div className="nav-container" style={{ display: 'flex', justifyContent: "space-around" }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" id='sticky-menu' className={show? "header" : "header sticky"}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon sx={{color:"black"}}/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link className="login-link" to="/">E-Commerce</Link>
                    </Typography>
                        {
                            user ? <Button sx={{color:"black", fontWeight: "bold"}} onClick={logout}>Log Out</Button>
                            :
                            <Link className="login-link" to="/login" >Login</Link>
                            
                        }

                    </Toolbar>
                </AppBar>
            </Box>
          
        </div>
    )
}

export default Navbar