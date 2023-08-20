import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Admin = () => {
    return (
        <>
            <div className={"row"}>
                <div className="col-4">
                    <h1>Page Admin</h1>
                    <nav>
                        <ul><Link to="product">Product Admin</Link></ul>
                        <ul><Link to="detail">Product Detail Admin</Link></ul>
                        <ul><Link to="">Home Admin</Link></ul>
                    </nav>
                </div>
                <div className="col-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Admin;