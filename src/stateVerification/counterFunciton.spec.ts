import { afterEach, describe, expect, it } from 'vitest'
import { getCounter, increment, reset } from './counter'

describe('funciton count 状态验证', () => {
  afterEach(() => {
    // 拆卸
    reset()
  })
  it('should increment', () => {
    increment()

    expect(getCounter()).toBe(1)
  })
  it('2', () => {
    increment()

    expect(getCounter()).toBe(1)
  })
})
