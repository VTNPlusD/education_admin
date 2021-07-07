import { AxiosResponse } from 'axios'
import { IError } from 'interfaces/IError'
import { IPayload } from 'interfaces/IPayload'
import { checkError } from './Functions'

function checkStatus<T>(response: AxiosResponse<IPayload<T>>) {
  if (response.status >= 200 && response.status < 300) {
    return response.data.payload
  }

  throw Object.assign(checkError(response.status, response.statusText))
}

function checkStatusData(response: any) {
  if (response.code >= 200 && response.code < 300) {
    return response
  }

  throw Object.assign(checkError(response.code, response.errors[0].message))
}

function parseData(response: IPayload<any>) {
  return response.payload
}

function parseError(error: IPayload<IError>) {
  return error.payload
}

export { checkStatus, checkStatusData, parseData, parseError }
