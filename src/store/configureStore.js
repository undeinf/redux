import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {devToolsEnhancer} from 'redux-devtools-extension'
// import {configureStore} from '@reduxjs/toolkit'
import reducer from './tasks'


// const store = configureStore({reducer})

// old approach
const store = createStore(reducer, devToolsEnhancer({trace: true}));
//, applyMiddleware(thunk)

export default store;