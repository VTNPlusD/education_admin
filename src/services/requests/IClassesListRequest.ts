export interface IClassListRequest {
  page?: number
  limit?: number
  order?: 'ASC' | 'DESC'
  search?: string
}
