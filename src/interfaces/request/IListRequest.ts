export interface IListRequest {
  search?: string
  page?: number
  limit?: number
  orderBy?: string
  orderDirection?: 'ASC' | 'DESC'
  condition?: string
}
