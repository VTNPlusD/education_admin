import axios from 'axios'
import { API_URL } from 'constants/general'
import { getToken } from 'utils/Functions'

class CommonApis {
  upload = async (file: any) => {
    const data = new FormData()
    data.append('file', file)

    const token = getToken()

    return axios({
      method: 'POST',
      url: API_URL.concat('/upload'),
      data: data,
      headers: { Authorization: 'Bearer ' + token }
    })
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error?.response
      })
  }
}

export const CommonApi = new CommonApis()
