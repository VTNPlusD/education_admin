import {
  ChapterActionTypes,
  IChapterState
} from 'redux/actions/chapters/chapterTypes'
import { EChapterActions } from 'redux/actions/chapters/EChapterActions'

const initialState: IChapterState = {
  listChapter: {
    content: [],
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
    payloadSize: 0,
    skippedRecords: 0,
    hasNext: false
  }
}

const chapterReducer = (
  state: IChapterState = initialState,
  action: ChapterActionTypes
): IChapterState => {
  switch (action.type) {
    case EChapterActions.SET_LIST_CHAPTER:
      return {
        ...state,
        listChapter: action.listChapter
      }
    default:
      return state
  }
}

export default chapterReducer
