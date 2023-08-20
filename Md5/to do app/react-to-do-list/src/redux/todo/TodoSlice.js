const initState =
    [
        {
            id: 1,
            name: "LEARN REACT",
            complete: true,
            properties: "HIGH"
        },
        {
            id: 2,
            name: "LEARN JAVA",
            complete: false,
            properties: "HIGH"
        },
        {
            id: 3,
            name: "LEARN C++",
            complete: false,
            properties: "LOW"
        },
    ]

export const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload]
        case "todoList/propertiesChange":
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        complete: !item.complete
                    };
                }
                return item;
            })
        default:
            return state;
    }
}