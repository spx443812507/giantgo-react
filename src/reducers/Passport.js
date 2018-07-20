import { handleActions } from 'redux-actions'
import actions from '../actions'

const defaultState = {
  isSubmitting: false,
  isFail: false,
  failMessage: undefined
}

const reducers = handleActions(
  {
    [actions.signInRequest]: (state) => {
      return Object.assign({}, state, {
        isSubmitting: true
      })
    },
    [actions.signInSuccess]: (state, {payload: {token}}) => {
      console.log(token)

      return Object.assign({}, state, {
        isSubmitting: false
      })
    },
    [actions.signInFail]: (state, {payload: {code}}) => {
      return Object.assign({}, state, {
        isSubmitting: false,
        isFail: true,
        failMessage: code
      })
    }
  },
  defaultState
)

export default reducers
