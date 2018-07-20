import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware(rootSaga)

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}
