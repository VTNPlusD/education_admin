import { ILessonState } from 'interfaces/interfaces/state/ILessonState'
import { ELessonActions } from 'redux/actions/lessons/ELessonActions'
import { LessonActionTypes } from 'redux/actions/lessons/lessonTypes'

const initialState: ILessonState = {
  listLesson: {
    content: [],
    currentPage: 1,
    totalPages: 0,
    totalRecords: 0,
    payloadSize: 0,
    skippedRecords: 0,
    hasNext: false
  }
}

const lessonReducer = (
  state: ILessonState = initialState,
  action: LessonActionTypes
): ILessonState => {
  switch (action.type) {
    case ELessonActions.SET_LIST_LESSON:
      return {
        ...state,
        listLesson: action.listLesson
      }

    default:
      return state
  }
}

export default lessonReducer
