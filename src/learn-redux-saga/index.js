import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './app'
import rootSaga from './store/saga'
import store, {sageMiddleware} from './store/'

sageMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'))
