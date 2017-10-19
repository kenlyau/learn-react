const types = {
  GET_REPOS_REQUEST: 'GET_REPOS_REQUEST',
  GET_REPOS_FAILURE: 'GET_REPOS_FAILURE',
  GET_REPOS_SUCCESS: 'GET_REPOS_SUCCESS'
}

export function getRepos () {
  return dispatch => {
    dispatch({type: types.GET_REPOS_REQUEST})
    return fetch('http://api.github.com/repositories?since=364')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: types.GET_REPOS_SUCCESS,
          payload: json
        })
      })
      .catch(() => {
        dispatch({type: types.GET_REPOS_FAILURE})
      })
  }
}
export default function respos (state = {}, action) {
  switch (action.type) {
    case types.GET_REPOS_REQUEST:
      return Object.assign({}, state, {pending: true})
    case types.GET_REPOS_SUCCESS:
      return Object.assign({}, state, {pending: false, data: action.payload})
    default:
      return state
  }
}
