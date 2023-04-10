import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './tasks'


const store = configureStore({reducer})

// old approach
// const store = createStore(reducer, applyMiddleware(thunk));
// redux devtools entry
//,  devToolsEnhancer({trace: true})


export default store;