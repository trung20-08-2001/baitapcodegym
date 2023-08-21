import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link> &nbsp; &nbsp;  &nbsp; &nbsp;
                <Link className="navLink" to="/cart">
                    Cart
                </Link>  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;