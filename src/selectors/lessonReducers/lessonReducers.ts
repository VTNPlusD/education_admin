import { AppState } from 'redux/reducers'

export const lessonSelectors = (state: AppState) => ({
  classDetail: state.classes.classDetail,
  listLesson: state.lessonReducer.listLesson,
  subjectDetail: state.subjects.subjectDetail,
  chapterDetail: state.chapterReducer.chapterDetail
})
