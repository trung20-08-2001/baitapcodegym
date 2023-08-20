import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const [second, setSecond] = useState(5);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (second > 0) {
                setSecond((prevSecond) => prevSecond - 1);
            } else {
                navigate('/');
            }
        }, 1000);

        return () => clearTimeout(timeout);
    }, [second]);

    return (
        <>
            <h1>Not Found</h1>
            <h1>Tự động quay lại trang chủ sau {second}s</h1>
        </>
    );
};

export default NotFound;