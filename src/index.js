/**
 * Steps for implementing redux
 * 
 * 1. Designing the store 
 * 2. List our actions(What to do)
 * 3. Create reducer function (How todo)
 * 4. Create redux store
 */
import axios from 'axios';
const { addTask, removeTask, completedTask, fetchTodo, getTasks } = require("./store/tasks/");
const { default: store } = require("./store/configureStore");
const { addEmployee } = require("./store/employees");


// store.dispatch(addTask({task: "Task 1"}));
// store.dispatch(addTask({task: "Task 1"}));
// console.log(store.getState());
// store.dispatch(removeTask({id: 2}));
// console.log(store.getState());
// store.dispatch(completedTask({id: 1}));
// console.log(store.getState());
// // store.dispatch(fetchTodo());
// // setTimeout(() => console.log(store.getState()), 1000)

// store.dispatch(addEmployee({name: "kML"}))
// store.dispatch(addEmployee({name: "sNG"}))
// console.log("Employees data", store.getState().employees);
// console.log("Tasks data", store.getState().tasks);
// //show error through middleware
// store.dispatch({type:"SHOW_ERROR", payload: {error: "User not found!!"}})

const gettingTasks = async () => {
    try{
    //calling api
    const response = await axios.get("http://localhost:5000/api/tasks")

    console.log("Res", response)
    //dispatch action
    store.dispatch(getTasks({tasks: response.data}))

    }catch(err){
        store.dispatch({type:"SHOW_ERROR", payload: {error: err.message}})
    }
}

gettingTasks();