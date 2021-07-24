import { IAddChapterRequest } from 'interfaces/request/IAddChapterRequest'
import { IListRequest } from 'interfaces/request/IListRequest'
import { CHAPTERS } from '..'
import instance from '../v1'

class ChapterApis {
  listChapter = (request?: IListRequest) =>
    instance.get(CHAPTERS, { params: request })
  addChapter = (request: IAddChapterRequest) => instance.post(CHAPTERS, request)
}

export const chapterApi = new ChapterApis()
