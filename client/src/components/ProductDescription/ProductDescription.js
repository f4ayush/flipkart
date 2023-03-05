import React,{useEffect, useState} from 'react'
import Gallery from "./Gallery";
import Description from "./Description";
import MobileGallery from "./MobileGallery";
import './ProductDescription.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getProduct} from "../../actions/product"
export default function ProductDescription() {
    const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);
  
  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };
  
  const product = useSelector(state => state.product);
  const dispatch = useDispatch()
  const productId = useParams().productId
  useEffect(() => {
    if(productId){
        dispatch(getProduct(productId));
    }
  }, [])
  
  return (
    <section className="core">
          <Gallery product={product} />
          <MobileGallery product={product}/>
          <Description
            product={product}
            onQuant={quant}
            onAdd={addQuant}
            onRemove={removeQuant}
            onSetOrderedQuant={setOrderedQuant}
          />
        </section>
  )
}
