import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { checkFirday } from './date'

describe('date', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it('should be happy when firday', () => {
    vi.setSystemTime(new Date(2023, 4, 5))
    let result = checkFirday()
    expect(result).toBe('happy')
  })
  it('should be unhappy when not firday', () => {
    vi.setSystemTime(new Date(2023, 4, 6))
    let result = checkFirday()
    expect(result).toBe('unhappy')
  })
})
