import React from 'react';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import List from "./List";
import NewBook from "./NewBook";
import Book from "./Book";
import BookLayout from "./BookLayout";

const PageAdmin = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink  to="books">List</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="books" element={<BookLayout/>} >
                    <Route index  element={<List/>}></Route>
                    <Route path=":id" element={<Book/>}></Route>
                    <Route path="new" element={<NewBook/>}></Route>
                </Route>
            </Routes>
        </>
    );
};
export default PageAdmin;