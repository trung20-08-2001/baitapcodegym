import React, {useEffect, useState} from 'react';
import store from "./redux/store";
import {useDispatch, useSelector} from "react-redux";


const Test = () => {

    const data=useSelector(store=>{
        return store
    })

    const dispatch=useDispatch();

    let increment = () => {
       return{
            type: "INCREMENT",
            payload: document.getElementById("input").value
        }
    }

    const decrement = () => {
        let obj = {
            type: "DECREMENT",
            payload: 10
        }
        store.dispatch(obj)
    }

    return (
        <>
            {
                data.map(((item,index) => {
                return (
                    <h1 key={index}>{item}</h1>
                )
            }))}
            <input type="text" id="input" />
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
};

export default Test;