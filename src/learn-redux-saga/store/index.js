import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import repos from './repos'

export default createStore(combineReducers({repos}), applyMiddleware(thunk))
