/**
 * Steps for implementing redux
 * 
 * 1. Designing the store 
 * 2. List our actions(What to do)
 * 3. Create reducer function (How todo)
 * 4. Create redux store
 */
import axios from 'axios';
import { apiCallBegan } from './store/api';
const { addTask, removeTask, completedTask, fetchTodo, getTasks, fetchTasks, loadTasks, addNewTask, updateCompleted, deteteTask } = require("./store/tasks/");
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

// store.dispatch(fetchTasks());


store.dispatch(loadTasks());

// store.dispatch(addNewTask({task: "1. Complete this excersize"}));
// store.dispatch(addNewTask({task: "2. Complete this excersize"}));
// store.dispatch(addNewTask({task: "4. Complete this excersize"}));
// store.dispatch(addNewTask({task: "3. Complete this excersize"}));

// store.dispatch(updateCompleted({id: 8, completed: true}));

store.dispatch(deteteTask({id: 9}))
store.dispatch(deteteTask({id: 8}))
store.dispatch(deteteTask({id: 7}))