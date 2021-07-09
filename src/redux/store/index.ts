import { applyMiddleware, createStore } from 'redux'
import rootReducer from 'redux/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'redux/sagas'
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { TransformConfig } from 'redux-persist/es/createTransform'

export const PERSIST_ROOT = 'persist:root'
export const PERSIST_KEY = 'root'
const persistConfig = {
  key: PERSIST_KEY,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  transforms: [
    createTransform(
      (inboundState) => ({ ...(inboundState as TransformConfig), error: '' }),
      (outboundState) => ({ ...outboundState, error: '' }),
      { whitelist: ['auth'] }
    )
  ]
}

const sagaMiddleware = createSagaMiddleware()
const configStore = () =>
  createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(sagaMiddleware)
  )

export const store = configStore()
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
