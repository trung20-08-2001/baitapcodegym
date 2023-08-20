import store from "./redux/store";
import {useEffect, useState} from "react";
import {addStudentAction, deleteStudentAction, editStudentAction} from "./redux/action";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";


function App() {
    const [student,setStudent]=useState({});
    const [data,setData] = useState([]);
    const [showButtonAdd,setShowButtonAdd]=useState(true)
    const [showButtonEdit,setShowButtonEdit]=useState(false)
    store.subscribe(()=>{
        setData(store.getState())
    })
    useEffect(() => {
        setData(store.getState)
    }, []);
    const deleteStudent=(id)=>{
        store.dispatch(deleteStudentAction(id))
    }

    const addStudent=()=>{
        store.dispatch(addStudentAction(student))
        setStudent({})
    }

    const getInfo=(item)=>{
        setStudent(item)
        setShowButtonAdd(false);
        setShowButtonEdit(true)
    }

    const handleChangeInput=(event)=>{
        const {name,value}=event.target;
        setStudent({...student,[name]:value})
    }

    const editStudent=()=>{
        store.dispatch(editStudentAction(student))
        setShowButtonAdd(true);
        setShowButtonEdit(false)
    }

    return (
        <>
            <label>Name</label>
            <input type={"text"} value={student.name} name={"name"} onChange={(event)=>handleChangeInput(event)} />
            <label>Age</label>
            <input type={"text"} value={student.age} name={"age"} onChange={(event)=>handleChangeInput(event)} />
            {showButtonAdd && <button onClick={addStudent}>Save</button>}
            {showButtonEdit && <button onClick={editStudent} >Edit</button>}
            <h1>List </h1>
            {data.map(item => {
            return (
                <>
                    <h1 key={item.id}>Id:{item.id}. Name:{item.name}. Age:{item.age}<button onClick={()=>getInfo(item)}>Edit</button><button onClick={()=>deleteStudent(item.id)}>Delete</button></h1>
                </>
            )
        })}
        </>
    );
}

export default App;
