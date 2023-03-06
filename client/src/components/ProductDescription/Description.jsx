import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { products } from "../../actions/sellerProducts";
import CartIcon from "../Icons/CartIcon";
import QuantityButton from "./QuantityButton";

const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant, product }) => {
  return (
    <section className="description">
      <p className="pre">{product.category}</p>
      <h1>{product.name}</h1>
      <p className="desc">
        {product.description}
      </p>
      <div className="price">
        <div className="main-tag">
          <p>{product.price}</p>
          <p>50%</p>
        </div>
        <s>{product.price * 2}</s>
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
      </div>
    </section>
  );
};

export default Description;
