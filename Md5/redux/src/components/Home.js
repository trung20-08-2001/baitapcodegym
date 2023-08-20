import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/thunk";
import {Link} from "react-router-dom";

const Home = () => {
    const data = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
            <table border="1">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to={"/create"}><button>Thêm</button></Link>
        </div>
    );
};

export default Home;