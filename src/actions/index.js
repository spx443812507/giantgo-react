import * as types from '../constants'
import { createActions } from 'redux-actions'

const {signIn, signUp} = createActions({
  [types.SIGN_IN]: (userName, password) => ({type: types.SIGN_IN, payload: {userName, password}}),
  [types.SIGN_UP]: payload => ({type: types.SIGN_UP, payload})
})

export { signIn, signUp }
