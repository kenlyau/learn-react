export const types = {
  GET_USER_REQUEST: 'GET_USER_REQUEST',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_ERROR: 'GET_USER_ERROR'
}

export function getUserRequest (keyword) {
  return {
    type: types.GET_USER_REQUEST,
    payload: {
      keyword
    }
  }
}

export function getUserSuccess (response) {
  return {
    type: types.GET_USER_SUCCESS,
    payload: response
  }
}

export function getUserError (e) {
  return {
    type: types.GET_USER_ERROR,
    error: e
  }
}

export default function userReducers (state = {}, action = {}) {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return Object.assign({}, state, {currentUser: action.payload, error: false})
    case types.GET_USER_ERROR:
      return Object.assign({}, state, {error: action.error, currentUser: {}})
    default:
      return state
  }
}
