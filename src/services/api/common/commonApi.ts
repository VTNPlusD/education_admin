import instance from '../v1'

class _CommonApi {
  getUser = () => instance.get('/todos/1')
}

export const CommonApi = new _CommonApi()
