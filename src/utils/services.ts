import { AxiosResponse } from 'axios'
import { checkError } from './functions'

function checkStatus(response: AxiosResponse<any>) {
  if (response.status >= 200 && response.status < 300) {
    return response.data
  }

  throw Object.assign(checkError(response.status, response.statusText))
}

function checkStatusData(response: any) {
  if (response.code >= 200 && response.code < 300) {
    return response
  }

  throw Object.assign(checkError(response.code, response.errors[0].message))
}

export { checkStatus, checkStatusData }
