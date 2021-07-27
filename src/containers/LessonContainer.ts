import { IListRequest } from 'interfaces/request/IListRequest'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getChapterAction } from 'redux/actions/chapters/chapterActions'
import { getClassDetailAction } from 'redux/actions/classes/classActions'
import { listLessonAction } from 'redux/actions/lessons/lessonActions'
import { getSubjectDetailAction } from 'redux/actions/subjects/subjectActions'
import { lessonSelectors } from 'selectors/lessonReducers/lessonReducers'
import Lessons from 'views/pages/lessons/Lessons'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getListLesson: (request: IListRequest) => dispatch(listLessonAction(request)),
  getClassDetail: (id: number) => dispatch(getClassDetailAction(id)),
  getSubjectDetail: (id: number) => dispatch(getSubjectDetailAction(id)),
  getChapterDetail: (id: number) => dispatch(getChapterAction(id))
})

export default connect(lessonSelectors, mapDispatchToProps)(Lessons)
