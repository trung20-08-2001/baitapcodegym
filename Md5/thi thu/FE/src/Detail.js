import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
/* global axios*/
const Detail = () => {
    const [product,setProduct]=useState({})
    const {idProduct}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:3001/products/"+idProduct)
            .then((response)=>{
                setProduct(response.data)
            })
            .then(error=>console.log(error))
    },[])

    return (
        <>
            <div className="container">
                <h1>Product Detail</h1>
                <p>Id: {product.id}</p>
                <p>Name: {product.title}</p>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <Link to='/'><button className="btn btn-primary">Back</button> </Link>
            </div>
        </>
    );
};

export default Detail;