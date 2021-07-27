import { IChapter } from 'interfaces/interfaces/IChapter'
import { IAddChapterRequest } from 'interfaces/request/IAddChapterRequest'
import { IListRequest } from 'interfaces/request/IListRequest'
import { CHAPTERS } from '..'
import instance from '../v1'

class ChapterApis {
  listChapter = (request?: IListRequest) =>
    instance.get(CHAPTERS, { params: request })
  addChapter = (request: IAddChapterRequest) => instance.post(CHAPTERS, request)
  deleteChapter = (id: number) =>
    instance.delete(CHAPTERS, {
      data: { id }
    })
  updateChapter = (chapter: IChapter) => instance.put(CHAPTERS, chapter)
  getChapter = (id: number) =>
    instance.get(CHAPTERS.concat('/').concat(id.toString()))
}

export const chapterApi = new ChapterApis()
