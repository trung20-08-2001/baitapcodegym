import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
            <div className="d-center">
                <Link to="admin">
                    <button className="btn btn-primary">Admin Page</button>
                </Link>&nbsp;&nbsp;
                <Link to="user">
                    <button  className="btn btn-primary">User Page</button>
                </Link>
            </div>
    );
};

export default Home;