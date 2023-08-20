import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const [second,setSecond]=useState(10);
    const navigate=useNavigate();
    useEffect(()=>{
        const timeout=setTimeout(() => {
            if (second > 0) {
                setSecond((prevSecond) => prevSecond - 1);
            } else {
                navigate('/');
            }
        }, 1000);
        return () => clearTimeout(timeout);
    },[second])

    return (
        <>
            <div className="container">
                <h1>Sai đường dẫn</h1>
                <h1>Quay lại trang chủ {second}s</h1>
            </div>
        </>
    );
};

export default NotFound;