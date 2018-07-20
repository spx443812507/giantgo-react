import { call, put } from 'redux-saga/effects'

import request from '../utils/request'
import actions from '../actions'

export function * signInRequest ({payload}) {
  try {
    const token = yield call(request, 'http://localhost:4000/api/user/token', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(actions.signInSuccess(token))
  } catch (error) {
    yield put(actions.signInFail(error))
  }
}
