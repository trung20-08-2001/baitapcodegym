import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./bai5/Login";
import Register from "./bai5/Resgister";
import UserAdmin from "./bai5/UserAdmin";
import Product from "./bai5/Product";
import Admin from "./bai5/Admin";
import Detail from "./bai5/Detail";
import Home from "./bai5/Home";
import NotFound from "./bai5/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="admin" element={<Admin/>}>
                    <Route path="" element={<UserAdmin/>}/>
                    <Route path="product" element={<Product/>}/>
                    <Route path="detail" element={<Detail/>}/>
                </Route>
                <Route path="home" element={<Home/>}>
                    <Route path="product" element={<h1>List Product</h1>}/>
                    <Route path="detail" element={<h1>Detail Product</h1>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
