import { handleActions } from 'redux-actions'
import { signIn, signUp } from '../actions'

const defaultState = {token: undefined}

const reducer = handleActions(
  {
    [signIn]: (state, {payload: {token}}) => {
      return Object.assign({}, state, token)
    },
    [signUp]: (state, {payload: {token}}) => {
      return Object.assign({}, state, token)
    }
  },
  defaultState
)

export default reducer
