const initState = {
    search: '',
    status: 'ALL',
}
export const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case "filter/searchFilterChange":
            return {
                ...state,
                search: action.payload
            }
        case "filter/statusFilterChange":
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}