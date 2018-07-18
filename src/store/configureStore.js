import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import * as sagas from '../sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware(sagas)

export default function configureStore (preloadedState) {
  return createStore(
    combineReducers(rootReducer),
    preloadedState,
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware
    )
  )
}
