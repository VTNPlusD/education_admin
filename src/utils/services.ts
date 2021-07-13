import { AxiosResponse } from 'axios'
import { IPayload } from 'interfaces/interfaces/IPayload'
import { checkError } from './Functions'

function checkStatus<T>(response: AxiosResponse<IPayload<T>>) {
  if (response.status >= 200 && response.status < 300) {
    return response.data.payload
  }

  if (response.status >= 400 && response.status < 500) {
    throw {...response.data, ...response.statusText}
  }

  throw Object.assign(checkError(response.status, response.statusText))
}

export { checkStatus }
