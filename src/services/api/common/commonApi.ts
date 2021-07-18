import axios from 'axios'
import { API_URL } from 'constants/general'
import { getToken } from 'utils/Functions'
import { DELETE_IMAGE, GET_LIST_UPLOAD } from '..'
import instance from '../v1'

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
  getListUpload = () => instance.get(GET_LIST_UPLOAD)
  deleteImage = (name: string) =>
    instance.delete(DELETE_IMAGE, {
      data: { filename: name }
    })
}

export const CommonApi = new CommonApis()
