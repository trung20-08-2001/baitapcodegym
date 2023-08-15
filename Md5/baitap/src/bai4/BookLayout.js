import React from 'react';
import {Link, Outlet} from "react-router-dom";

const BookLayout = () => {
    return (
        <>
            <ul>
                <li><Link to="1">Book 1</Link></li>
                <li><Link to="2">Book 2</Link></li>
                <li><Link to="new">New Book</Link></li>
            </ul>
            <Outlet context={{obj:"Hello world "}}/>
        </>
    );
};

export default BookLayout;