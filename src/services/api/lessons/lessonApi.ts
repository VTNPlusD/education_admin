import { IListRequest } from 'interfaces/request/IListRequest'
import { LESSONS } from '..'
import instance from '../v1'

class LessonApis {
  listLesson = (request: IListRequest) =>
    instance.get(LESSONS, { params: request })
}

export const LessonApi = new LessonApis()
