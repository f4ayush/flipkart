import React, { useEffect, useState } from 'react'
import Products from "../Products/Products";
import { useDispatch } from 'react-redux';
import { allProducts } from "../../actions/allProducts";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
export default function Home() {
    const dispatch = useDispatch();
    const error = useSelector(state=> state.error)
    const products = useSelector(state => state.allProducts)
    const [productError, setproductError] = useState(error)
    const [productList, setproductList] = useState(products)
    const location = useLocation()
    useEffect(() => {
        dispatch(allProducts());
    }, [dispatch, location]);
    useEffect(() => {
        setproductError(error)
        setproductList(products)

        return ()=>{
        setproductError("")
        setproductList([])
        }
    }, [error, products, location]);
    return (
        <div>
            <Products products={productList} error={productError}/>
        </div>
    )
}
