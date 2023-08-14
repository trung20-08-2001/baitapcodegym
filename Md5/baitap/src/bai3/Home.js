import {useState} from "react";
import Show from "./Show";
import Add from "./Add";

function Home() {
    const [list, setList] = useState([
        {id: 1, name: "A", price: 10},
        {id: 2, name: "B", price: 1},
        {id: 3, name: "C", price: 110},
        {id: 4, name: "D", price: 1120},
        {id: 5, name: "E", price: 1660}
    ])

    const [showList, setShowList] = useState(true)
    const [showAdd, setShowAdd] = useState(false)
    const [productEdit,setProductEdit]=useState(null)
    const addNewProduct = (newProduct) => {
        setList([...list, newProduct]);
    };
    let handleAddProduct = () => {
        setShowList(false)
        setShowAdd(true)
    }

    let deleteProduct=(id)=>{
        let newList=list.filter(item=>item.id!=id)
        setList(newList)
    }

    let handleShowList=()=>{
        setShowAdd(false)
        setShowList(true)
    }

    let getProductEdit=id=>{
        let product=list.find(item=>item.id===id)
        setProductEdit(product)
        handleAddProduct()
    }

    let handleEditProduct=(id,newProduct)=>{
        let index=list.findIndex(item=>item.id===id);
        list.splice(index,1,newProduct)
        setProductEdit(null)
    }

    return (
        <>
            {showList && <Show list={list} handleAddProduct={handleAddProduct}  deleteProduct={deleteProduct} getProductEdit={getProductEdit}/>}
            {showAdd && <Add list={list}  handleShowList={handleShowList} addNewProduct={addNewProduct} productEdit={productEdit} handleEditProduct={handleEditProduct}/>}
        </>
    )
}

export default Home;