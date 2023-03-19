
import './App.css';
import React, { useLayoutEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory, withRouter } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Buyer from './components/Login/Buyer/Buyer';
import Home from './components/Home/Home';
import { useScrollPosition } from './hooks/useScrollPosition';
import ProductDescription from './components/ProductDescription/ProductDescription';
import Cart from './components/Cart/Cart';
import SearchProduct from './components/SearchProduct/SearchProduct';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import decode from "jwt-decode";
// import NewBar from './components/Navbar/NewBar';
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    // window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})


function App() {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const rendersCount = useRef(0)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > window.scrollY || ( currPos.y == 0 && window.scrollY == 0)
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )
  return (
    <Router>
      {/* <ScrollToTop> */}
      <Navbar show={hideOnScroll}/>
      {/* <NewBar show={hideOnScroll}/> */}
      <Switch>
        <Route path='/login' exact><IsLoggedIn><Buyer/></IsLoggedIn></Route>
        <Route path='/sign-up' exact><IsLoggedIn><Buyer/></IsLoggedIn></Route>
        <Route path="/cart"><PrivateRoutes><Cart/></PrivateRoutes></Route>
        <Route path="/product-description/:productId" component={ProductDescription}/>
        
        <Route path="/search" component={SearchProduct}/>
        <Route path="/forget-password" component={ForgetPassword}/>
        <Route path="/reset-password/:token" component={ResetPassword}/>
        <Route path='/' exact component={Home} />
      </Switch>
      {/* </ScrollToTop> */}
    </Router>

  );
}

export default App;

function PrivateRoutes({ children }){
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const history = useHistory()
  const token = user?.token;
  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()){
      history.push("/")
      return Buyer
    }
    return children;
  }
  history.push("/")
  return Buyer
}


function IsLoggedIn({children}){
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const history = useHistory()
  const token = user?.token;
  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()){
      return children
    }
    history.push("/")
    return Home;
  }
  return children
}