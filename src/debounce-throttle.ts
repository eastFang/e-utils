export const debounce = (action: (...args: any[]) => void, idle: number): () => void => {
  let last
  return function realFunc() {
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    clearTimeout(last)
    last = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-invalid-this
      action.apply(this, args)
    }, idle)
  }
}