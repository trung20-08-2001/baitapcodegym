import {useEffect, useState} from "react";
/* global axios */
function Show(props) {
    const [list,setList]=useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        axios.get('http://localhost:8080/getAll')
            .then(function (response) {
                setList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const deleteEmployee=(id)=>{
        axios.get('http://localhost:8080/delete/'+id)
            .then(function (response) {
                fetchData()
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <div className="container">
            <button className="btn btn-primary" onClick={props.handleAddEmployee}>Thêm nhân viên</button>
            <table className="table text-center">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item) => {
                    return (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <th>{item.age}</th>
                            <th>{item.salary}</th>
                            <th>{item.department.name}</th>
                            <th>
                                <button className='btn btn-warning' onClick={()=>props.findById(item.id)} >Edit
                                </button>
                            </th>
                            <th>
                                <button className='btn btn-danger'
                                       onClick={()=>deleteEmployee(item.id)} >Delete
                                </button>
                            </th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}


export default Show;
