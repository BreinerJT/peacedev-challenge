import { formatPrice } from "../helpers"

describe('formatPrice', () => {
  test('should throw if argument passed is not a number', () => {
    // @ts-expect-error
    expect(() => formatPrice('hi')).toThrow()
    // @ts-expect-error
    expect(() => formatPrice(['hi'])).toThrow()
  })

  test('should throw if argument passed is NaN', () => {
    // @ts-expect-error
    expect(() => formatPrice('1' + 1)).toThrow()
    // @ts-expect-error
    expect(() => formatPrice('hello' + 10)).toThrow()
  })

  test('should return "$200.00" if argument passed is "200"', () => {
    expect(formatPrice(200)).toBe('$200.00')
  })
})