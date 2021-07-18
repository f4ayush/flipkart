
import './App.css';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Admin from './components/Admin/Admin'
import Seller from './components/Login/Seller/Seller';
import Buyer from './components/Login/Buyer/Buyer';
import Home from './components/Home/Home';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/seller' exact component={Admin} />
        <Route path='/loginSeller' exact component={Seller} />
        <Route path='/login' exact component={Buyer} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>

  );
}

export default App;
