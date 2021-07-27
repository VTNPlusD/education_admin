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
  },
  chapterDetail: {
    id: 0,
    name: '',
    order: 0,
    active: true
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
    case EChapterActions.SET_UPDATE_CHAPTER:
      const newList = { ...state.listChapter }
      let indexChapter = newList.content.findIndex(
        (chapter) => chapter.id === action.chapter.id
      )
      newList.content[indexChapter] = action.chapter
      return {
        ...state,
        listChapter: newList
      }
    case EChapterActions.SET_CHAPTER:
      return {
        ...state,
        chapterDetail: action.chapter
      }
    default:
      return state
  }
}

export default chapterReducer
