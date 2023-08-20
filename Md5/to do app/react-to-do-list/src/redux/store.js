import {combineReducers, createStore} from "redux";
import {filterReducer} from "./filter/FilterSlice";
import {todoListReducer} from "./todo/TodoSlice";
import {configureStore} from "@reduxjs/toolkit";
// export const rootReducer =combineReducers({
//     filter:filterReducer,
//     todoList:todoListReducer
// })
// export const store=createStore(rootReducer)
export const store=configureStore({
    reducer:{
        filter:filterReducer,
        todoList:todoListReducer
    }
})
