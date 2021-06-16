const ConvertTime = (time: Date) => {
  return time
}

const checkError = (errorType: string | number, message: string) => {
  return {
    errorType: errorType,
    message: message
  }
}

export { ConvertTime, checkError }
