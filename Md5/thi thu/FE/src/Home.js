import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
/* global axios */
const Home = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
       fetchData();
    },[])

    const fetchData=()=>{
        axios.get("http://localhost:3001/products")
            .then( (response)=> {
                setList(response.data)
            })
            .catch( (error)=> {
                console.log(error)
            })
    }

    const deleteProduct=(id)=>{
        axios.delete("http://localhost:3001/products/"+id)
            .then(function (response) {
               fetchData();
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <>
            <div className="container">
                <Link to="/addProduct"><button className="btn btn-primary">Add</button></Link>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col" colSpan="2">Active</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link  to={"detail/"+item.id}>{item.title}</Link></td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={"editProduct/"+item.id} ><button className="btn btn-warning">Edit</button></Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>{deleteProduct(item.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default Home;