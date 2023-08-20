import {fetchDataSuccess} from './actions';
import axios from "axios";

export const fetchData = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/products')
            .then((response) => response.data)
            .then((data) => {
                dispatch(fetchDataSuccess(data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

