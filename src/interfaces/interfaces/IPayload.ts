export interface IPayload<T> {
  payload: T
  errorType: string
  message: string[]
  timestamp: Date
}

export interface IPagination<T> {
  content: T
  currentPage: number
  totalPages: number
  totalRecords: number
  payloadSize: number
  skippedRecords: number
  hasNext: boolean
}
