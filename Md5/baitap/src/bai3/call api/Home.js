import {useState} from "react";
import Show from "./Show";
import Add from "./Add";
/* global axios */
function Home() {
    const [showList, setShowList] = useState(true)
    const [showAdd, setShowAdd] = useState(false)
    const [employee,setEmployee]=useState({name:"",age:'',salary:'',department:{id:1}})
    const [isEdit,setIsEdit]=useState(false)

    let handleAddEmployee = () => {
        setShowList(false)
        setShowAdd(true)
    }
    let handleShowList=()=>{
        setShowAdd(false)
        setShowList(true)
    }

    let reset=()=>{
        setEmployee({name:"",age:'',salary:'',department:{id:1}})
    }

    let findById=id=>{
        axios.get("http://localhost:8080/find/"+id)
            .then(function (response){
                setEmployee(response.data)
                setIsEdit(true)
                handleAddEmployee()
            })
            .catch(function (error){
                console.log(error)
            })
    }
    
    return (
        <>
            <h1 className='text-center text-success'>Quản lí nhân viên</h1>
            {showList && <Show handleAddEmployee={handleAddEmployee} findById={findById} />}
            {showAdd && <Add handleShowList={handleShowList} employee={employee} isEdit={isEdit} reset={reset}/>}
        </>
    )
}

export default Home;