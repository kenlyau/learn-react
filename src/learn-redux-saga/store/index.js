import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { devToolsEnhancer } from 'redux-devtools-extension'
import user from './user'
import rootSaga from './saga'

export const sageMiddleware = createSagaMiddleware()
export default createStore(
  combineReducers({user}),
  compose(
    applyMiddleware(sageMiddleware, createLogger()),
    devToolsEnhancer()
  )
)
sageMiddleware.run(rootSaga)
