import React, {useEffect, useState} from 'react';
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
/* global axios */

const AddProduct = () => {
    const [product,setProduct]=useState({id:"",title:"",description:"",price:""})
    const navigate=useNavigate();
    const {idProduct}=useParams();
    const [isEdit,setIsEdit]=useState(false);

    const handleChangeInput=(event)=>{
        let {name,value}=event.target;
        setProduct({...product,[name]:value})
    }

    const addProduct=()=>{
        if(!isEdit) {
            axios.post("http://localhost:3001/products", product)
                .then(response => navigate("/"))
                .catch((error) => console.log(error))
        }else{
            setIsEdit(false)
            axios.put("http://localhost:3001/products/"+idProduct, product)
                .then(response => navigate("/"))
                .catch((error) => console.log(error))
        }
    }

    useEffect(()=>{
        if(idProduct!==undefined){
            setIsEdit(true)
            axios.get("http://localhost:3001/products/"+idProduct)
                .then((response)=>{
                    setProduct(response.data)
                })
                .then(error=>console.log(error))
        }
    },[])


    return (
        <>
            <div className="container">
                <h1 className="text-center text-warning">Thêm sản phẩm</h1>
                <div className="form-group">
                    <label htmlFor="email">Name:</label>
                    <input type="text" className="form-control" placeholder="Enter name" id="name" name="title" value={product.title}
                           onChange={(event) => handleChangeInput(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Description:</label>
                    <input type="text" className="form-control" placeholder="Enter name" id="description" name="description" value={product.description}
                           onChange={(event) => handleChangeInput(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Price:</label>
                    <input type="number" min="0" className="form-control" id="price" placeholder="Enter price" value={product.price}
                           name="price" onChange={(event) => handleChangeInput(event)}/>
                </div>
                <button className="btn btn-primary" onClick={() =>addProduct()}>Save</button>
                &nbsp;&nbsp;&nbsp;
                <Link to="/"><button className="btn btn-primary">Back</button></Link>
            </div>
        </>
    );
};

export default AddProduct;