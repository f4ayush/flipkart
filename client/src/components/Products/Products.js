import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';
import axios from 'axios';
import "./products.css"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom"

export default function Products() {
    const products = useSelector(state => state.allProducts)
    const login = localStorage.getItem('profile')
    const [buyProduct, setbuyProduct] = useState({})
    const [showProduct, setshowProduct] = useState(false)
    const handleClick = (product) => {
        setbuyProduct(product)
        setshowProduct(true)
        window.scrollTo(0, 0)
    }
    
    const initPayment = (data, product) => {
		const options = {
			key: "rzp_test_L6r3iUMhxSgpSE",
            key_secret: "LKGT6Ee7dpj00Ck3nu4E1vNq",
			amount: data.amount,
			currency: data.currency,
			name: product.name,
			description: "Test Transaction",
			image: product.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "https://flipkart-5zfu.vercel.app/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

    const handlePayment = async (product) => {
		try {
			const orderUrl = "https://flipkart-5zfu.vercel.app/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: product.price });
			console.log(data);
			initPayment(data.data, product);
		} catch (error) {
			console.log(error);
		}
	};


    return (
        <div className="product-container">
        {showProduct && <Product setshowProduct={setshowProduct} product={buyProduct} />}

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4} justifyContent={{sm:"center", md:"flex-start"}}>
            {products.map((product) => (
              <Grid item key={product.key} xs={12} sm={8} md={6} lg={4} >
                <Card
                className="single-product"
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius:0 }}
                >
                  <Link to={"product-description/"+product.key}>
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
                    {login && <Button sx={{float:"right", color:'black', fontWeight: "700px"}} size="small" onClick={() => handlePayment(product)}>Buy Now</Button>}
                  </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
           
          </Grid>
        </Container>
        </div>
    )
}

