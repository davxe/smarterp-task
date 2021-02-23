import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import postReducer from '../reducer/postReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        post:postReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore