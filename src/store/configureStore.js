import {
    legacy_createStore as createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {
    devToolsEnhancer
} from 'redux-devtools-extension'
import {
    configureStore
} from '@reduxjs/toolkit'
import taskReducer from './tasks'
import employeesReducer from './employees'
import log from './middleware/log'
// logger library provided by redux
import logger from 'redux-logger'
import error from './middleware/error'

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        employees: employeesReducer
    },
    // added default middleware too to middleware
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, error]
})

// old approach
// const store = createStore(reducer, applyMiddleware(thunk));
// redux devtools entry
//,  devToolsEnhancer({trace: true})


export default store;