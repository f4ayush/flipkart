import React, {useState} from "react";
import CartIcon from "../Icons/CartIcon";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import QuantityButton from "./QuantityButton";
import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux'
import { buyProduct } from "../../actions/product";
import { addToCart } from "../../actions/cart";
import { useHistory } from "react-router-dom";

const Description = ({product}) => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  const history = useHistory();
  const [quant, setQuant] = useState(1);
  const [orderedQuant, setOrderedQuant] = useState(0);
  
  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const checkLoggedIn = ()=>{
    const token = user?.token;
      if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 > new Date().getTime()){
            return true
          }
      }
      return false
  }
  const handlePayment = (product) => {
      if (checkLoggedIn()) {
            dispatch(buyProduct(product))
      }else{
        history.push("/login")
      }
	};

  const cartButtonHandler = ()=>{
    if (checkLoggedIn()) {
      dispatch(addToCart({
        product: product._id,
        price: product.price,
        quantity: quant
    }))
    }else{
      history.push("/login")
    }
  }
  return (
    <section className="description">
      <p className="pre">{product.category}</p>
      <h1>{product.name}</h1>
      <p className="desc">
        {product.description}
      </p>
      <div className="price">
        <div className="main-tag">
          <p>&#8377; {product.price}</p>
          <p>50%</p>
        </div>
        <s>&#8377; {product.price * 2}</s>
      </div>
      <div className="buttons">
        <QuantityButton onQuant={quant} onRemove={removeQuant} onAdd={addQuant} />
        <button
          className="add-to-cart"
          onClick={cartButtonHandler}
        >
          <CartIcon />
          add to cart
        </button>
        <button
          className="buy-now add-to-cart"
          onClick={() => handlePayment(product)}
          >
          <ShoppingBagIcon />
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Description;
