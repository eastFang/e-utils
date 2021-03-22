import {
  getPercentNum,
  getPercentStr,
  getFileNameFromOssUrl,
  getFileSuffix,
} from '../src/format'

test('分子为1，分母为100', () => {
  expect(getPercentNum(1, 100)).toBe(1)
  expect(getPercentStr(1, 100)).toBe('1%')
})
test('分子为1，分母为0', () => {
  expect(getPercentNum(1, 0)).toBe(0)
  expect(getPercentStr(1, 0)).toBe(0)
})
test('分子为0，分母为1', () => {
  expect(getPercentNum(0, 1)).toBe(0)
  expect(getPercentStr(0, 1)).toBe(0)
})
test('分子为0，分母为0', () => {
  expect(getPercentNum(0, 0)).toBe(0)
  expect(getPercentStr(0, 0)).toBe(0)
})
test('分子为1, 分母为3, 保留两位有效数字', () => {
  expect(getPercentNum(1, 3, 2)).toBe(33.33)
  expect(getPercentStr(1, 3, 2)).toBe('33.33%')
})

const mockOssUrl = 'https://ai-call-platform-daily.oss-cn-hangzhou.aliyuncs.com/FileUpload/98/215/18_1615968545307.jpg?Expires=1616494735&OSSAccessKeyId=LTAICuX7MOmHW6Oy&Signature=%2B%2FANetYVx8WzCNbQ2OVjdxodJYc%3D'
test('根据oss地址获取文件名', () => {
  expect(getFileNameFromOssUrl(mockOssUrl)).toBe('18_1615968545307.jpg')
})

test('根据oss地址获取文件后缀', () => {
  expect(getFileSuffix(mockOssUrl)).toBe('jpeg')
})