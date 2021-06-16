import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import commonReducer from './common/commonReducer'

const allReducers = combineReducers({
  common: commonReducer,
  auth: authReducer
})

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action)
}

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
