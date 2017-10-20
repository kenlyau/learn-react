import {call, put, takeLatest} from 'redux-saga/effects'
import {API_URL} from './constants'
import {getReposRequest, getReposSuccess, getReposFailure} from './repos'

function fetchRepos (url) {
  return fetch(url)
    .then(res => res.json())
    .then(res => res)
}
export function * getRepos () {
  yield put(getReposRequest())
  try {
    let result = yield call(fetchRepos, API_URL)
    yield put(getReposSuccess(result))
  } catch (e) {
    yield put(getReposFailure(e))
  }
}

export default function * root () {
  yield takeLatest('GET_REPOS_SYNC', getRepos)
}
