import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { deleteCartItems, updateCartItem } from "../../actions/cart";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 15,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 1 auto"
  },
  cover: {
    width: 151,
    backgroundSize: "contain",
  },
  productName: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "200px",
  },
  priceColor: {
    color: "var(--orange)",
    display: "flex",
    flexDirection: "column",
  },
  deleteButton: {
    cursor: "pointer",
  },
  cartButtons: {
    minWidth: "28px",
    height: "28px",
    background: "linear-gradient(#fff,#f9f9f9)",
    display: "inline-block",
    border: "1px solid #c2c2c2",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "50%",
    paddingTop: "4px",
    lineHeight: 1
  },
  cartQuantity:{
    display: "inline-block",
    padding: "3px 6px",
    // width: "calc(100% - 60px)",
    height: '100%',
    width: "46px",
    height: "28px",
    borderRadius: "2px",
    backgroundColor: "#fff",
    border: "1px solid #c2c2c2",
    margin: "0 5px"
  },
  cartQuantityInput:{
    border: "none",
    width: "20%",
    fontSize: "14px",
    padding: "4px 0 5px 20%",
    fontWeight: "500",
    verticalAlign: "middle",
    textAlign: "center"
  }
}));


export default function ShoppingCartItem({ items, settotal, total }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(0)
  const timeout = useRef()

  function debounce(func, delay) {
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => func.apply(context, args), delay);
    }
  }
  
  const debouncedIncreaseQuantity = debounce(() => {
    dispatch(updateCartItem({...items, quantity: quantity + 1}));
    
  }, 500);
  
  const debouncedDecreaseQuantity = debounce(() => {
    dispatch(updateCartItem({...items, quantity: quantity - 1}));
    
  }, 500);
  
  const increaseQuantity = () => {
    debouncedIncreaseQuantity();
    setquantity(quantity + 1);
    settotal(items.price + total);
  };
  
  const decreaseQuantity = () => {
    debouncedDecreaseQuantity();
    setquantity(quantity - 1);
    settotal(total - items.price);
  };
  

  useEffect(() => {
    setquantity(items.quantity)
    console.log(items.quantity)
  }, [items])
  
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={items.product.image}
        title="Live from space album cover"
      />
      <CardContent className={classes.content}>
        {/* <CardMedia
          className={classes.cover}
          image="https://source.unsplash.com/random"
          title="Live from space album cover"
        /> */}
        <Stack direction="row" justifyContent="space-between">
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {items.product.category}
          </Typography>

          <DeleteIcon
            className={classes.deleteButton}
            onClick={() => dispatch(deleteCartItems(items._id))}
          />
        </Stack>
        <Typography
          className={classes.productName}
          variant="div"
          component="h2"
        >
          {items.product.name}
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>

        {/* <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Size
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              NA
            </Typography>
          </Grid> */}
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" component="div">
            Quantity
          </Typography>

          <Stack spacing={1} direction="row" justifyContent="end">
            <Button onClick={decreaseQuantity} className={classes.cartButtons} disabled={quantity <= 1}>-</Button>
            <Typography variant="body1" component="div">{quantity}</Typography>
            <Button onClick={increaseQuantity} className={classes.cartButtons} disabled={quantity >= 10}>+</Button>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="body1"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            Price
          </Typography>
          <div variant="h6" component="div" className={classes.priceColor}>
            ₹ {quantity * items.price}
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
