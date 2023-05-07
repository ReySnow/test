import { describe, expect, it, vi } from 'vitest'
import { sayHi, sayHiV2 } from './setInterval'

describe('setInterval', () => {
  it('should called one', () => {
    vi.spyOn(console, 'log')
    vi.useFakeTimers()
    sayHi()
    vi.advanceTimersToNextTimer()
    expect(console.log).toBeCalledWith('hi')
  })
  it('should setTimeout setInterval', () => {
    vi.spyOn(console, 'log')
    vi.useFakeTimers()
    sayHiV2()
    // 嵌套
    // vi.advanceTimersByTime(1000 + 100)
    vi.advanceTimersToNextTimer()
    vi.advanceTimersToNextTimer()
    expect(console.log).toBeCalledWith('hi')
  })
})
