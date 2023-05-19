import { describe, expect, it } from 'vitest'
import { emailValidator } from '.'

// 参数化验证
describe('emailValidator', () => {
  it('should return true with valid email', () => {
    const email = 'test@example.com'
    expect(emailValidator(email)).toBe(true)
  })

  it('should return false for invalid email without domain', () => {
    const email = 'test@example'
    expect(emailValidator(email)).toBe(false)
  })

  it('should return false for invalid email without @', () => {
    const email = 'test.example.com'
    expect(emailValidator(email)).toBe(false)
  })

  it.each([
    ['test@example.com', true],
    ['test@example', false],
    ['test.example.com', false]
  ])('should return %s when email is %s', (email, expected) => {
    expect(emailValidator(email)).toBe(expected)
  })

  it.each([
    { email: 'test@example.com', expected: true },
    { email: 'test@example', expected: false },
    { email: 'test.example.com', expected: false }
  ])('should return $email when email is $expected', ({ email, expected }) => {
    expect(emailValidator(email)).toBe(expected)
  })
})
