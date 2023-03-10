import React, {useEffect, useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import OrderSummaryItem from "./OrderSummaryItem";
import ShoppingCartItem from "./ShoppingCartItem";
import { getCartItems } from "../../actions/cart";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)   
  const [total, settotal] = useState(0);
  console.log(cart)

  const getTotal = (items)=>{
    const total = items.reduce((ac, cur)=>{
      ac += cur.price
      return ac
    },0)

    settotal(total)
  }
  useEffect(() => {
      dispatch(getCartItems());
      
  }, [dispatch]);
  
  useEffect(() => {
    getTotal(cart)
  }, [cart])
  
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs>
                {
                  cart.map((items, i)=>(
                    <ShoppingCartItem key={i} items={items}/>
                  ))
                }
                {/* <ShoppingCartItem /> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <OrderSummaryItem  total={total}/>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
