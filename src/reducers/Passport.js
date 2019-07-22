import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SET_USER_INFO,
  CLEAR_USER_INFO
} from '../constants/passport'

const INITIAL_STATE = {
  loading: false,
  isFail: false,
  failMessage: '',
  avatar: '',
  nickName: '',
  isBind: false
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        isFail: true,
        failMessage: '登录失败'
      }
    case SET_USER_INFO:
      return {
        ...state,
        avatar: action.payload.avatar,
        nickName: action.payload.nickName,
        isBind: action.payload.isBind,
      }
    case CLEAR_USER_INFO:
      return {
        ...state,
        avatar: '',
        nickName: '',
        openId: '',
        isBind: false
      }
    default:
      return state
  }
}
