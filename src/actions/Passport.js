import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL
} from '../constants/passport'

export function signInRequest () {
  return {
    type: SIGN_IN_REQUEST
  }
}

export function signInSuccess (data) {
  return {
    type: SIGN_IN_SUCCESS,
    data
  }
}

export function signInFail (data) {
  return {
    type: SIGN_IN_FAIL,
    data
  }
}
