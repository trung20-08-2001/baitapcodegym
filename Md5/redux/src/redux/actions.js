import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    SAVE_DATA
} from './constant';

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

export const saveData = (data) => ({
    type: SAVE_DATA,
    payload: data
})