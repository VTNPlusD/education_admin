import { ILesson } from '../ILesson'
import { IPagination } from '../IPayload'

export interface ILessonState {
  listLesson: IPagination<ILesson[]>
}
