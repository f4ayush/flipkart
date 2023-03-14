import React, {useEffect, useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import OrderSummaryItem from "./OrderSummaryItem";
import ShoppingCartItem from "./ShoppingCartItem";
import { getCartItems } from "../../actions/cart";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css"
import { Button, Typography } from "@mui/material";
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)   
  const [total, settotal] = useState(0);
  const getTotal = ()=>{
    const total = cart.reduce((ac, cur)=>{
      ac += (cur.price * cur.quantity)
      return ac
    },0)
    console.log(total)
    settotal(total)
  }
  useEffect(() => {
      dispatch(getCartItems());
  }, []);
  
  useEffect(() => {
    getTotal(cart)
  }, [cart])
  
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{mt:10}}>
        {
            cart.length == 0 ?
            <div className="no-items-wrapper">
              <div>
                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                <Typography variant="h5" sx={{textAlign:"center"}}>Your cart is empty!</Typography>
              </div>
            </div> :
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={7} lg={7}>
                <Grid container>
                  <Grid item xs>
                    {
                      cart.map((items, i)=>(
                        <ShoppingCartItem settotal={settotal} total={total} key={i} items={items}/>
                      ))
                    }
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={5}>
                <OrderSummaryItem  total={total}/>
              </Grid>
            </Grid>
        }
        
      </Container>
    </React.Fragment>
  );
}
