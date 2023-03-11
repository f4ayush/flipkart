import React from "react";
import "./product.css";
import { Placeholder } from "semantic-ui-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function LoadingProducts({ setshowProduct, product }) {
 
  return (
    <>
      {arr.map((item) => (
        <Grid
          item
          key={item}
          xs={12}
          sm={8}
          md={6}
          lg={4}
        >
          <Card
            className="single-product"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 0,
            }}
          >
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>

            <CardContent sx={{ flexGrow: 1 }}>
              <Placeholder
                style={{ width: "100%", height: "100%", border: "none" }}
              >
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
