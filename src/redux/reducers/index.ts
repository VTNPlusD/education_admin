import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import commonReducer from './common/commonReducer'
import usersReducer from './users/usersReducer'

const allReducers = combineReducers({
  common: commonReducer,
  auth: authReducer,
  users: usersReducer
})

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action)
}

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
