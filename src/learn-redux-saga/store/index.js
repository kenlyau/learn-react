import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { devToolsEnhancer } from 'redux-devtools-extension'
import repos from './repos'

export const sageMiddleware = createSagaMiddleware()
export default createStore(
  combineReducers({repos}),
  compose(
    applyMiddleware(sageMiddleware, createLogger()),
    devToolsEnhancer()
  )
)
