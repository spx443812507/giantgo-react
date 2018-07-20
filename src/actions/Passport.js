import types from '../constants'
import { createActions } from 'redux-actions'

const {
  signInRequest,
  signInSuccess,
  signInFail,
  signUpRequest,
  signUpSuccess,
  signUpFail
} = createActions({
  [types.SIGN_IN_REQUEST]: () => ({type: types.SIGN_IN_REQUEST, payload: {}}),
  [types.SIGN_IN_SUCCESS]: token => ({type: types.SIGN_IN_SUCCESS, payload: token}),
  [types.SIGN_IN_FAIL]: error => ({type: types.SIGN_IN_FAIL, payload: error}),
  [types.SIGN_UP_REQUEST]: userInfo => ({type: types.SIGN_UP_REQUEST, payload: userInfo}),
  [types.SIGN_UP_SUCCESS]: token => ({type: types.SIGN_UP_SUCCESS, payload: token}),
  [types.SIGN_UP_FAIL]: error => ({type: types.SIGN_UP_FAIL, payload: error})
})

export default {
  signInRequest,
  signInSuccess,
  signInFail,
  signUpRequest,
  signUpSuccess,
  signUpFail
}
