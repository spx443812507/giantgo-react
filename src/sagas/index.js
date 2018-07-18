import { call, put } from 'redux-saga/effects'
import request from '../utils/request'

export function * signIn (data) {
  try {
    const token = yield call(request, '/api/session', {})
    yield put({
      type: 'SIGNIN_SUCCESS',
      payload: token,
    })
  } catch (error) {
    yield put({
      type: 'SIGNIN_ERROR',
      error
    })
  }
}
