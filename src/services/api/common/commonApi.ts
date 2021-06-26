import instance from '../v1'

class CommonApis {
  getUser = () => instance.get('/todos/1')
}

export const CommonApi = new CommonApis()
