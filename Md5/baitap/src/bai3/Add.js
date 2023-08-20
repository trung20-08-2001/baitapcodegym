import {useEffect, useState} from "react";

function Add(props) {
    const [name,setName]=useState([''])
    const [price,setPrice]=useState([''])

    let {productEdit}=props;

    useEffect(() => {
        let inputName = document.getElementById("name")
        let inputPrice = document.getElementById("price")
        if (productEdit !== null) {
            setName(productEdit.name);
            setPrice(productEdit.price)
            inputName.value = name;
            inputPrice.value =price;
        }
    }, [productEdit]);

    const handleChangeName = (event) => {
        let {value} = event.target;
        setName(value)
    }

    const handleChangePrice = (event) => {
        let {value} = event.target;
        setPrice(value)
    }
    const addProduct = (props) => {
        let newObj;
        if(productEdit===null) {
            if (props.list.length === 0) {
                newObj = {
                    id: 1,
                    name: name,
                    price: price
                }
            } else {
                newObj = {
                    id: props.list[(props.list.length - 1)].id + 1,
                    name: name,
                    price: price
                }
            }
            props.addNewProduct(newObj)
        }else{
            newObj={
                id:productEdit.id,
                name: name,
                price: price
            }
            props.handleEditProduct(productEdit.id,newObj)
        }
        props.handleShowList()
    }


    return (
        <>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="email">Name:</label>
                    <input type="text" className="form-control" placeholder="Enter name" id="name" name="name" value={name}
                           onChange={(event) => handleChangeName(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Price:</label>
                    <input type="number" min="0" className="form-control" id="price" placeholder="Enter price" value={price}
                           name="price" onChange={(event) => handleChangePrice(event)}/>
                </div>
                <button className="btn btn-primary" onClick={() =>addProduct(props)}>Save</button>
                &nbsp;&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={props.handleShowList}>Back</button>
            </div>
        </>
    )

}

export default Add;