import { isArray } from '../src/type'

test('[1, 2, 3] 是数组', () => {
  expect(isArray([1, 2, 3])).toBe(true)
})

test('数字1 不是数组', () => {
  expect(isArray(1)).toBe(false)
})

test('字符串1 不是数组', () => {
  expect(isArray('1')).toBe(false)
})

test('布尔值true 不是数组', () => {
  expect(isArray(true)).toBe(false)
})

test('布尔值false 不是数组', () => {
  expect(isArray(true)).toBe(false)
})

test('null 不是数组', () => {
  expect(isArray(null)).toBe(false)
})

test('undefined 不是数组', () => {
  expect(isArray(undefined)).toBe(false)
})

test('symbol值 不是数组', () => {
  expect(isArray(Symbol())).toBe(false)
})

test('对象 不是数组', () => {
  expect(isArray({ type: 'object' })).toBe(false)
})

test('函数 不是数组', () => {
  expect(isArray(() => 'function')).toBe(false)
})