const initState = [
    {
        id: 1,
        name: "A",
        age: 23
    },
    {
        id: 2,
        name: "B",
        age: 20
    },
    {
        id: 3,
        name: "C",
        age: 30
    },
]
function Reducer(state = initState, active) {
    switch (active.type) {
        case "ADD":
            return [...state,active.payload];
        case "EDIT":
            return state.map(item=>{
                if (item.id === active.payload.id) {
                    return { ...item, id: active.payload.id, name: active.payload.name, age: active.payload.age };
                }
                return item;
            })
        case "DELETE":
            return  state.filter(item=>item.id!==active.payload)
        default:
            return state;
    }
}

export  default Reducer;