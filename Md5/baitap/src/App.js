import React from "react";
import {Route, Routes} from "react-router-dom";
import PageAdmin from "./bai4/PageAdmin";
import PageUser from "./bai4/PageUser";
import Home from "./bai4/Home"
import NotFound from "./bai4/NotFound";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin/*" element={<PageAdmin/>}></Route>
                <Route path="/user" element={<PageUser/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
