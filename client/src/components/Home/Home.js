import React, { useEffect } from 'react'
import Products from "../Products/Products";
import { useDispatch } from 'react-redux';
import { allProducts } from "../../actions/allProducts";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allProducts());
    }, [dispatch]);
    return (
        <div>
            <Products />
        </div>
    )
}
