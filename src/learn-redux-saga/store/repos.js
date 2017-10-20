import types from './constants'

export function getReposRequest () {
  return {
    type: types.GET_REPOS_REQUEST,
    pending: true
  }
}

export function getReposSuccess (result) {
  return {
    type: types.GET_REPOS_SUCCESS,
    pending: false,
    data: result
  }
}
export function getReposFailure (error) {
  return {
    type: types.GET_REPOS_FAILURE,
    pending: false,
    error: error
  }
}

export default function respos (state = {}, action) {
  switch (action.type) {
    case types.GET_REPOS_REQUEST:
      return Object.assign({}, state, {pending: true, data: []})
    case types.GET_REPOS_SUCCESS:
      return Object.assign({}, state, {pending: false, data: action.data})
    case types.GET_REPOS_FAILURE:
      return Object.assign({}, state, {pending: false, data: [], error: action.error})
    default:
      return state
  }
}
