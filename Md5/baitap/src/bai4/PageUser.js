import React from 'react';
import {Link} from "react-router-dom";

const PageUser = () => {
    return (
        <div>
            <h1>Page User</h1>
            <Link to="/" ><button className="btn btn-primary">Home</button></Link>
        </div>
    );
};

export default PageUser;