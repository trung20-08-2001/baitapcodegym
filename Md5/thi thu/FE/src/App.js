import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import AddProduct from "./AddProduct";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Test from "./Test";


function App() {
    return (
        <Routes>
            <Route path="" element={<Test/>}/>
            <Route path="addProduct" element={<AddProduct/>}/>
            <Route path="editProduct/:idProduct" element={<AddProduct/>}></Route>
            <Route path="detail/:idProduct" element={<Detail/>}></Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
