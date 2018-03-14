import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import store from './store'
import { createHttp } from '../util'
const http = createHttp({
  baseURL: 'http://ali.yinsunz.com:1337/parse'
})
let userProfile = localStorage.getItem('user')
if (userProfile) {
  userProfile = JSON.parse(userProfile)
  http.setHeader('X-Parse-Session-Token', userProfile.sessionToken)
}
const rootStore = store({
  userProfile
})
if (userProfile) {
  // 验证session
  http.get('/users/me')
    .then(res => {
      rootStore.dispatch.user.updateProfile(res)
    })
}

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('app'))
