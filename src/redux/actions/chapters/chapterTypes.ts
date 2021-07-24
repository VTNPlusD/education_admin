import { IChapter } from 'interfaces/interfaces/IChapter'
import { IPagination } from 'interfaces/interfaces/IPayload'
import { Action } from 'redux'
import { IAddChapterRequest } from 'interfaces/request/IAddChapterRequest'
import { IListRequest } from 'interfaces/request/IListRequest'
import { EChapterActions } from './EChapterActions'

export interface IChapterState {
  listChapter: IPagination<IChapter[]>
}

export interface IListChapterAction extends Action {
  type: EChapterActions.LIST_CHAPTER
  request?: IListRequest
}

export interface ISeTListChapterAction extends Action {
  type: EChapterActions.SET_LIST_CHAPTER
  listChapter: IPagination<IChapter[]>
}

export interface IAddChapterAction extends Action {
  type: EChapterActions.ADD_CHAPTER
  request: IAddChapterRequest
  callback: () => void
}

export interface ISetChapterAction extends Action {
  type: EChapterActions.SET_CHAPTER
  chapter: IChapter
}

export type ChapterActionTypes =
  | IListChapterAction
  | ISeTListChapterAction
  | IAddChapterAction
  | ISetChapterAction
