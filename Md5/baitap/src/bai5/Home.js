import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className={"row"}>
                <div className="col-4">
           <h1>Home</h1>
            <nav>
                <ul><Link to="product">Product Home</Link></ul>
                <ul><Link to="detail">Product Detail Home</Link></ul>
            </nav>
                </div>
                <div className="col-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Home;