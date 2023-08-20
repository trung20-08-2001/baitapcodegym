import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <Link to="/register" ><h1>Register</h1></Link>
            <h1>Form Login</h1>
        </>
    );
};

export default Login;