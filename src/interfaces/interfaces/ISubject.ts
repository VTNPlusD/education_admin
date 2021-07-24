import { IChapter } from './IChapter'

export interface ISubject {
  id: number
  name: string
  order: number
  active: boolean
  createdAt?: Date
  updatedAt?: Date
  __chapters__?: IChapter[]
}
