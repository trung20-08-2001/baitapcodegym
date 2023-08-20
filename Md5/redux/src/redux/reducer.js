
import {
    FETCH_DATA_SUCCESS, SAVE_DATA
} from './constant';

const initialState =[]
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return [...action.payload]
        case SAVE_DATA:
            return [...state,action.payload]
        default:
            return state;
    }
};

export default reducer;