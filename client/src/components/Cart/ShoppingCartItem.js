import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch } from 'react-redux';
import { deleteCartItems } from "../../actions/cart";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 15
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    backgroundSize: 'contain'
  },
  productName:{
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "200px"
  },
  priceColor:{
    color: "var(--orange)"
  }
}));

const titleStyle = {
  display: "flex",
  justifyContent: "space-between"
}

export default function ShoppingCartItem({items}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={items.product.image}
        title="Live from space album cover"
      />
      <CardContent className={classes.content}>
        <CardMedia
          className={classes.cover}
          image="https://source.unsplash.com/random"
          title="Live from space album cover"
        />
        <div style={titleStyle}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {items.product.category}
          </Typography>

          <DeleteIcon onClick={()=>dispatch(deleteCartItems(items._id))}/>
        </div>
        <Typography className={classes.productName} variant="div" component="h2">
          {items.product.name}
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Size
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              NA
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Quantity
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="h6" component="div">
              {items.quantity}
            </Typography>
          </Grid>
          <Grid item xs={10} sm={9} md={10} lg={10}>
            <Typography
              variant="body1"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Price
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={1}>
            <Typography variant="h6" component="div" className={classes.priceColor}>
              &#8377; {items.price}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
