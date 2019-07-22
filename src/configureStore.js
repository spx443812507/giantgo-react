import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

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
