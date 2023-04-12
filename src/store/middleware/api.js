import axios from "axios";
import { apiCallBegan } from "../api";

const api = store => next =>async action => {
    if(action.type !== apiCallBegan.type){
        return next(action)
    }
    
    const {url, method, data, onSuccess, onError, onStart} = action.payload;
    const {dispatch} = store;

    if(onStart) dispatch({
        type: onStart
    })

    try{
        const response = await axios.request({
            baseURL: 'http://localhost:5000/api',
            url,
            method,
            data
        });
    
        dispatch({
            type: onSuccess,
            payload: response.data
        })
    
    }catch(error){
        dispatch({
            type: onError,
            payload: {error: error.message}
        });
        dispatch({
            type: "SHOW_ERROR", payload: {error: error.message}
        })
    }
}

export default api;