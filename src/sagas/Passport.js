import { call, put } from 'redux-saga/effects'

import request from '../utils/request'
import {
  signInRequest,
  signInSuccess,
  signInFail
} from '../actions/passport'

export function * signIn ({payload}) {
  try {
    yield put(signInRequest())
    const {token} = yield call(request, '/api/user/token', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    yield put(signInSuccess(token))
  } catch (error) {
    yield put(signInFail(error))
  }
}
