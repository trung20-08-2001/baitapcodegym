import {useState} from "react";


function App() {
    const [product, setProduct] = useState({});

    const handleChangeInput = (event) => {
        const {name, value} = event.target;
        setProduct({...product, [name]: value})
    }

    const save = () => {

    }
    return (
        <>
            <label>Name</label>
            <input type={"text"} value={product.title} name={"title"} onChange={(event) => handleChangeInput(event)}/>
            <label>Price</label>
            <input type={"number"} value={product.price} name={"price"} onChange={(event) => handleChangeInput(event)}/>
            <label>Description</label>
            <input type={"text"} value={product.description} name={"description"}
                   onChange={(event) => handleChangeInput(event)}/>
            <button onClick={save}>Save</button>
        </>
    );
}

export default App;
