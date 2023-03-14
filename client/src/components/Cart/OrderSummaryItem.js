import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import {useDispatch} from "react-redux";
import {checkout} from "../../actions/cart"

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "1rem",
    minWidth: "275px",
    marginTop: 15
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  buyButton:{
    color: "var(--orange)"
  }
});

export default function OrderSummaryItem({total}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const handleCheckOut = ()=>{
    dispatch(checkout(total))
  }
  return (
    <Card className={classes.root} elevation={15}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Shopping Cart
        </Typography>
        <Typography variant="div" component="h1">
          Order Summary
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" component="div">
              Delivery Charges
            </Typography>
          
          
            <Typography variant="h6" component="div">
              Free
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" component="div">
              Total
            </Typography>
          
          
            <Typography variant="h6" component="div">
            &#8377;{total}
            </Typography>
          
        </Stack>
      </CardContent>

      <CardActions>
        <Button size="large" className={classes.buyButton} onClick={()=>{handleCheckOut()}}>
          BUY NOW
        </Button>
      </CardActions>
    </Card>
  );
}
