import {createSelector} from "reselect";

export const todoListSelector = (state) => {
    return state.todoList.filter(item => {
        return item.name.includes(searchTextSelector(state))
    })
}

export const searchTextSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    (todoList, status, searchText) => {
        return todoList.filter(item => {
            if (status === "ALL") {
                return item.name.includes(searchText)
            }
            return (
                item.name.includes(searchText) &&
                status === "COMPLETE" ? item.complete : !item.complete
            )
        })
    }
)