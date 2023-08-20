export const addTodo=(data)=>{
    return{
        type:"todoList/addTodo",
        payload:data
    }
}


export const searchFilterChange=(data)=>{
    return{
        type:"filter/searchFilterChange",
        payload:data
    }
}

export const statusFilterChange=(data)=>{
    return{
        type:"filter/statusFilterChange",
        payload:data
    }
}

export const propertiesFilterChange=(data)=>{
    return {
        type:"filter/propertiesFilterChange",
        payload:data
    }
}

export const editStatusAction=(data)=>{
    return {
        type:"todoList/propertiesChange",
        payload:data
    }
}