import {call, all, put, fork, takeLatest} from 'redux-saga/effects'
import {types, getUserError, getUserSuccess} from './user'
import * as api from '../api'

function * fetchUser (action) {
  try {
    const user = yield call(api.getUser, action.payload.keyword)
    if (user.message) {
      yield put(getUserError(user))
    } else {
      yield put(getUserSuccess(user))
    }
  } catch (e) {
    yield put(getUserError(e))
  }
}

function * watchUserRequest () {
  yield takeLatest(types.GET_USER_REQUEST, fetchUser)
}

export default function * rootSaga () {
  yield all([
    fork(watchUserRequest)
  ])
}
