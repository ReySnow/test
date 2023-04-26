import { describe, expect, it } from 'vitest'

describe('test', () => {
  it('should first', () => {
    const a = 2
    expect(a).toBe(2)
  })
  it('should second', () => {
    const user = { name: 'li' }
    expect(user).toEqual({ name: 'li' })
  })
  it('should third', () => {
    expect(true).toBeTruthy()
  })
})
