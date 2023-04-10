/**
 * Steps for implementing redux
 * 
 * 1. Designing the store 
 * 2. List our actions(What to do)
 * 3. Create reducer function (How todo)
 * 4. Create redux store
 */

const { addTask, removeTask, completedTask, fetchTodo } = require("./store/tasks/");
const { default: store } = require("./store/configureStore");


store.dispatch(addTask("Task 1"));
store.dispatch(addTask("Task 2"));
console.log(store.getState());
store.dispatch(removeTask(1));
console.log(store.getState());
store.dispatch(completedTask(2));
console.log(store.getState());
store.dispatch(fetchTodo());
setTimeout(() => console.log(store.getState()), 1000)
