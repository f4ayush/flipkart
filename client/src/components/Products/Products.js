import React from 'react'
import { useSelector } from "react-redux";
import "./products.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom"
import LoadingProducts from './LoadingProducts';
import { Button } from '@mui/material';

export default function Products({error, products}) {
      
    return (
      <Container sx={{ py: 8, mt:5 }} maxWidth="md">
        <Grid container spacing={4} justifyContent={{sm:"center", md:"flex-start"}}>
          {
             error ? <div className="no-items-wrapper">
             <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
             <Typography variant="h5" sx={{textAlign:"center"}}>{error}</Typography>
             <Button><Link to="/">Shop more</Link></Button>
           </div>: (products.length == 0 && <LoadingProducts />)
          }
        
          {products.map((product) => (
            <Grid item key={product._id} xs={12} sm={8} md={6} lg={4}>
              <Card
              className="single-product"
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius:0, marginTop:"10px" }}
              >
                <Link to={"product-description/"+product._id}>
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    // aspectRatio: "16/9"
                    objectFit:"contain"

                  }}
                  className="product-img"
                  image={product.image}
                  alt="product image"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  
                  <Typography className='post-title' gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography className='pro-price' component="span">
                      &#8377; {product.price}
                  </Typography>
                </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
}

