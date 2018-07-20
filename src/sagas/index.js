import { takeEvery } from 'redux-saga/effects'
import constants from '../constants'
import * as passportSagas from './Passport'

export default function * rootSaga () {
  yield takeEvery(constants.SIGN_IN_REQUEST, passportSagas.signInRequest)
}
