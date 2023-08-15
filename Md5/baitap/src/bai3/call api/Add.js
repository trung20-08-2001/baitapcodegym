import {useEffect, useState} from "react";
/* global axios */
function Add(props) {
    const [employee,setEmployee]=useState({name:"",age:'',salary:''})
    const [listDepartment,setListDepartment]=useState([])


    const addEmployee=()=>{
        axios.post('http://localhost:8080/save',employee)
            .then(function (response) {
                if(props.isEdit){
                    props.reset();
                }
                props.handleShowList();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(()=>{
        axios.get('http://localhost:8080/department')
            .then(function (response) {
                setEmployee(props.employee)
                setListDepartment(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    },[])

    const handleChangeInput=(event)=>{
        let {name,value}=event.target
        setEmployee({...employee,[name]:value})
    }

    const handleChangeDepartment=(event)=>{
        let {value}=event.target;
        setEmployee({...employee,department:{id:value}})
    }

    return (
        <>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="email">Name:</label>
                    <input type="text" className="form-control" placeholder="Enter name" id="name" name="name" onChange={(event)=>handleChangeInput(event)}  value={employee.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Age:</label>
                    <input type="number" min="0" className="form-control" id="price" name="age" placeholder="Enter price" onChange={(event)=>handleChangeInput(event)} value={employee.age}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Salary:</label>
                    <input type="number" min="0" className="form-control" id="price" name="salary" placeholder="Enter price" onChange={(event)=>handleChangeInput(event)} value={employee.salary} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Department:</label>
                    <select  onChange={event => handleChangeDepartment(event)}>
                        <option disabled >Choose Department</option>
                        {listDepartment.map((item) => (
                            employee.department.id === item.id ? (
                                <option selected value={item.id} key={item.id}>{item.name}</option>
                            ) : (
                                <option value={item.id} key={item.id}>{item.name}</option>
                            )
                        ))}
                    </select>
                </div>
                <button className="btn btn-primary" onClick={addEmployee}>Save</button>
                &nbsp;&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={props.handleShowList}>Back</button>
            </div>
        </>
    )

}

export default Add;