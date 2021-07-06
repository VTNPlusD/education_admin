import { AppState } from 'redux/reducers'

export const userSelector = (state: AppState) => ({
    usersList: state.users.usersList
})
