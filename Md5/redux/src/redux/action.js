export const addStudentAction=(data)=>{
    return{
        type:"ADD",
        payload:data
    }
}

export const editStudentAction=(data)=>{
    return{
        type:"EDIT",
        payload:data
    }
}

export const deleteStudentAction=(data)=>{
    return{
        type:"DELETE",
        payload: data
    }
}