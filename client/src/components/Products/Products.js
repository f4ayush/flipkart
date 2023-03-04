import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';
import axios from 'axios';
// import "./products.css"
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    
    const initPayment = (data) => {
		const options = {
			key: "rzp_test_L6r3iUMhxSgpSE",
            key_secret: "LKGT6Ee7dpj00Ck3nu4E1vNq",
			amount: data.amount,
			currency: data.currency,
			name: "book.name",
			description: "Test Transaction",
			image: "book.img",
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

    const handlePayment = async () => {
		try {
			const orderUrl = "https://flipkart-5zfu.vercel.app/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: 520 });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};


    return (
        <div className="product-container">
        {showProduct && <Product setshowProduct={setshowProduct} product={buyProduct} />}

            <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={uuidv4()} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                    //   pt: '56.25%',
                    }}
                    image={product.image}
                    alt="product image"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography>
                        {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{product.price}</Button>
                    {login && <Button size="small" onClick={() => handlePayment()}>Buy Now</Button>}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
    )
}

