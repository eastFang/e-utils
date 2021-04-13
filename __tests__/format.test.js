import {
  getPercentNum,
  getPercentStr,
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