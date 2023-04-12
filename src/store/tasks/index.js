import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../utils/http'
import { apiCallBegan } from '../api';

let id = 0;
const initialState = {
    tasks: [],
    loading: false,
    error: null
}
// export const fetchTasks = createAsyncThunk('fetchTasks', async (a, {rejectWithValue}) => {
//     try{
//         const response = await axios.get("/tasks");
//         return {
//             tasks: response.data
//         }
//     }catch(err){
//         return rejectWithValue({
//             error: err.message
//         })
//     }
// })

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        apiRequested: (state, action) => {
            state.loading = true;
        },
        apiRequestedFailed: (state, action) => {
            state.loading = false;
        },
        // action functions
        getTasks: (state, action) => {
            state.tasks = action.payload;
            state.loading = false
            // return action.payload.tasks;
        },
        addTask: (state, action) => {
            state.tasks.push({
                id: ++id,
                task: action.payload.task,
                completed: false
            })
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            state.splice(index, 1);
        },
        completedTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            state[index].completed = true;
        }
    },
    // extraReducers: {
    //     [fetchTasks.fulfilled]: (state, action) => {
    //         state.tasks = action.payload.tasks;
    //         state.loading = false
    //     },
    //     [fetchTasks.pending]: (state, action) => {
    //         state.loading = true
    //     },
    //     [fetchTasks.rejected]: (state, action) => {
    //         state.error = action.payload.error
    //         state.loading = false
    //     }
    // }

})

export const {apiRequested, apiRequestedFailed, getTasks, addTask, completedTask, removeTask} = taskSlice.actions;

export default taskSlice.reducer;


const url = "/tasks"

export const loadTasks = () => apiCallBegan({
    url,
    onSuccess: getTasks.type,
    onError: apiRequestedFailed.type,
    onStart: apiRequested.type
})