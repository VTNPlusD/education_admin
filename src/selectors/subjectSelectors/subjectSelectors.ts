import { AppState } from 'redux/reducers'

export const subjectSelectors = (state: AppState) => ({
  subjectDetail: state.subjects.subjectDetail,
  classDetail: state.classes.classDetail
})
