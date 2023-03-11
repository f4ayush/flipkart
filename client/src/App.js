
import './App.css';
import React, { useLayoutEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Admin from './components/Admin/Admin'
import Seller from './components/Login/Seller/Seller';
import Buyer from './components/Login/Buyer/Buyer';
import Home from './components/Home/Home';
import { useScrollPosition } from './hooks/useScrollPosition';
import ProductDescription from './components/ProductDescription/ProductDescription';
import Cart from './components/Cart/Cart';
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
      <Switch>
        <Route path='/seller' exact component={Admin} />
        <Route path='/loginSeller' exact component={Seller} />
        <Route path='/login' exact component={Buyer} />
        <Route path='/sign-up' exact component={Buyer} />
        <Route path="/product-description/:productId" component={ProductDescription}/>
        <Route path="/cart" component={Cart}/>
        <Route path='/' exact component={Home} />
      </Switch>
      {/* </ScrollToTop> */}
    </Router>

  );
}

export default App;
