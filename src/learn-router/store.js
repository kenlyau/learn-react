import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

let initialState = {}
const defaultState = {
  auth: {
    isAuth: false
  }
}

if (localStorage.getItem('auth')) {
  initialState = Object.assign(defaultState, JSON.parse(localStorage.getItem('auth')))
} else {
  initialState = defaultState
}

const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

export function login (username) {
  return {
    type: types.LOGIN,
    username
  }
}

export function logout () {
  return {
    type: types.LOGOUT
  }
}

export function reducers (state, action) {
  switch (action.type) {
    case types.LOGIN:
      const auth = {auth: {isAuth: true, username: action.username}}
      localStorage.setItem('auth', JSON.stringify(auth))
      return Object.assign({}, state, auth)
    case types.LOGOUT:
      localStorage.removeItem('auth')
      return Object.assign({}, state, {auth: {isAuth: false}})
    default :
      return state
  }
}

export default createStore(
  reducers,
  initialState,
  applyMiddleware()
)
