import React,{useEffect, useState} from 'react'
import Gallery from "./Gallery";
import Description from "./Description";
import MobileGallery from "./MobileGallery";
import './ProductDescription.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getProduct, resetProduct} from "../../actions/product"
export default function ProductDescription() {
   
  const product = useSelector(state => state.product);
  const dispatch = useDispatch()
  const [loading, setloading] = useState(true)
  const productId = useParams().productId
  
  useEffect(() => {
    if(productId){
        dispatch(getProduct(productId));
    }
    
   
  }, [dispatch])

  useEffect(() => {
    return ()=>{
      dispatch(resetProduct())
    }
  }, [])
  
  useEffect(() => {
    if(Object.keys(product)==0){
      setloading(true)
    }else{
      setloading(false)
    }
  }, [product])
  
  
  return (
    <section className="core">
          <Gallery product={product} loading={loading} />
          <MobileGallery product={product} loading={loading} />
          <Description
            product={product}
            loading={loading} 
          />
        </section>
  )
}
