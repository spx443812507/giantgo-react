import { takeEvery } from 'redux-saga/effects'
import {
  SIGN_IN
} from '../constants/passport'
import * as passportSagas from './passport'

export default function * rootSaga () {
  yield takeEvery(SIGN_IN, passportSagas.signIn)
}
