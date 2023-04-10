import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './tasks'
import employeesReducer from './employees'


const store = configureStore({reducer: {
    tasks: taskReducer,
    employees: employeesReducer
}})

// old approach
// const store = createStore(reducer, applyMiddleware(thunk));
// redux devtools entry
//,  devToolsEnhancer({trace: true})


export default store;