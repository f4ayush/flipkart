import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "1rem",
    minWidth: "275px"
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
          {" "}
          Order Summary
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Typography variant="body1" component="div">
              Shipping
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Typography variant="h6" component="div">
            &#8377;0
            </Typography>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <Typography variant="body1" component="div">
              Total
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Typography variant="h6" component="div">
            &#8377;{total}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button size="large" className={classes.buyButton}>
          BUY NOW
        </Button>
      </CardActions>
    </Card>
  );
}
