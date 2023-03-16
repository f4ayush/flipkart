import React, { useEffect, useState } from 'react'
import Products from '../Products/Products'
import { useSelector } from "react-redux";

export default function SearchProduct() {
  const error = useSelector(state=> state.error)
  const products = useSelector(state => state.searchProducts  )
  const [productError, setproductError] = useState(error)
  const [productList, setproductList] = useState(products)
  useEffect(() => {
      setproductError(error)
      setproductList(products)

      return ()=>{
        setproductError("")
        setproductList([])
      }
  }, [error, products]);
  return (
    <Products products={productList} error={productError} />
  )
}
