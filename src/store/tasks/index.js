// import {createAction} from '@reduxjs/toolkit'

// action types
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK"
const COMPLETED_TASK = "COMPLETED_TASK"


// actions
export const addTask = (task) => {
    return {
        type: ADD_TASK, payload: { task}
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK, payload: {id}
    }
}

export const completedTask = (id) => {
    return {
        type: COMPLETED_TASK, payload: {id}
    }
}

// thunk function
export const  fetchTodo = () =>{
    return async function(dispatch, getState){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        console.log("Response: " + JSON.stringify(response))
        const task = await response.json();

        console.log("Task", task)
        dispatch(addTask(task.title));
    }
}


// reducers
let id = 0;


export default function reducer(state = [], action){
    switch(action.type){
        case ADD_TASK:
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ]
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id);

        case COMPLETED_TASK:
            return state.map(task => task.id === action.payload.id ? {
                ...task, completed: true
            }: task)

        default:
            return state;
    }
}

