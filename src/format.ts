import { isInteger } from './type'

export function getPercentNum(son: number, mon: number): number | string {
  if (!son || !mon) {
    return 0
  }
  const perc = son / mon * 100

  return isInteger(perc) ? perc : perc.toFixed(2)
}

export function getPercentStr(son: number, mon: number): number | string {
  const num = getPercentNum(son, mon)
  if (!num) return 0

  return `${num}%`
}

export function getFileNameFromOssUrl(ossUrl: string): string {
  if (!ossUrl) return ''

  const ExpireTagIdx = ossUrl.lastIndexOf('?Expires')
  const lastLineIdx = ossUrl.lastIndexOf('/') + 1
  if (ExpireTagIdx > -1) {
    return ossUrl.substring(lastLineIdx, ExpireTagIdx)
  }

  return ossUrl.substring(lastLineIdx)
}

export function getFileSuffix(url: string): string {
  const filename = getFileNameFromOssUrl(url)
  const lastPoint = filename.split('.')

  return lastPoint[1] === 'jpg' ? 'jpeg' : lastPoint[1]
}