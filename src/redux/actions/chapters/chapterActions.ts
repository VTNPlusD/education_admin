import { IChapter } from 'interfaces/interfaces/IChapter'
import { IPagination } from 'interfaces/interfaces/IPayload'
import { IAddChapterRequest } from 'interfaces/request/IAddChapterRequest'
import { IListRequest } from 'interfaces/request/IListRequest'
import {
  IAddChapterAction,
  IDeleteChapterAction,
  IGetChapterAction,
  IListChapterAction,
  ISetChapterAction,
  ISeTListChapterAction,
  ISetUpdateChapterAction,
  IUpdateChapterAction
} from './chapterTypes'
import { EChapterActions } from './EChapterActions'

export const listChapterAction = (
  request?: IListRequest
): IListChapterAction => ({
  type: EChapterActions.LIST_CHAPTER,
  request
})

export const setListChapterAction = (
  listChapter: IPagination<IChapter[]>
): ISeTListChapterAction => ({
  type: EChapterActions.SET_LIST_CHAPTER,
  listChapter
})

export const addChapterAction = (
  request: IAddChapterRequest,
  callback: () => void
): IAddChapterAction => ({
  type: EChapterActions.ADD_CHAPTER,
  request,
  callback
})

export const getChapterAction = (id: number): IGetChapterAction => ({
  type: EChapterActions.GET_CHAPTER,
  id
})

export const setChapterAction = (chapter: IChapter): ISetChapterAction => ({
  type: EChapterActions.SET_CHAPTER,
  chapter
})

export const deleteChapterAction = (
  id: number,
  callback: () => void
): IDeleteChapterAction => ({
  type: EChapterActions.DELETE_CHAPTER,
  id,
  callback
})

export const updateChapterAction = (
  chapter: IChapter
): IUpdateChapterAction => ({
  type: EChapterActions.UPDATE_CHAPTER,
  chapter
})

export const setUpdateChapterAction = (
  chapter: IChapter
): ISetUpdateChapterAction => ({
  type: EChapterActions.SET_UPDATE_CHAPTER,
  chapter
})
