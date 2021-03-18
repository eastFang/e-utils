export function isType(type: string) {
  return function isParamType(param: any): boolean {
    return Object.prototype.toString.call(param) === `[object ${type}]`
  }
}

export const isObject = isType('Object')
export const isArray = isType('Array')
export const isFunction = isType('Function')
export const isNumber = isType('Number')
export const isString = isType('String')
export const isBoolean = isType('Boolean')
export const isNull = isType('Null')
export const isUndefined = (param: any) => typeof param === 'undefined'
export const isEmptyObj = (param: any) => isObject(param) && !Object.keys(param).length

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = ():void => {}