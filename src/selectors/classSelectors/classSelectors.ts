import { AppState } from 'redux/reducers'

export const classSelectors = (state: AppState) => ({
  classesList: state.classes.classesList,
  classDetail: state.classes.classDetail
})
