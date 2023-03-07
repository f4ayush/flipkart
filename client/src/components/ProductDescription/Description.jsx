import React from "react";
import CartIcon from "../Icons/CartIcon";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import QuantityButton from "./QuantityButton";
import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux'
import { buyProduct } from "../../actions/product";
import { useHistory } from "react-router-dom";

const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant, product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  const history = useHistory();
  const handlePayment = (product) => {
		const token = user?.token;
      if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 > new Date().getTime()){
            dispatch(buyProduct(product))
          }
      }else{
        history.push("/login")
      }
      
	};
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
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
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
