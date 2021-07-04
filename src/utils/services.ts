import { AxiosResponse } from 'axios'
import { IError } from 'interfaces/IError'
import { ILogin } from 'interfaces/ILogin'
import { IPayload } from 'interfaces/IPayload'
import { checkError } from './Functions'

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

function parseData(response: IPayload<ILogin>) {
  return response.payload
}

function parseError(error: IPayload<IError>) {
  return error.payload
}

export { checkStatus, checkStatusData, parseData, parseError }
