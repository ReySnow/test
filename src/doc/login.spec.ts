import { clogin } from 'tlogin'
import { describe, expect, it, vi } from 'vitest'
import { getTip, login, loginV2 } from './login'

// mock 测试替身
vi.mock('tlogin', () => {
  return {
    clogin: vi.fn().mockReturnValue(true)
    // clogin: vi.fn(() => true)
  }
})

describe('测试第三方库行为', () => {
  it('should called', () => {
    login('cc')
    expect(clogin).toBeCalled()
    expect(clogin).toBeCalledWith('cc')
  })
  it('v2', () => {
    loginV2('cc')
    // 行为验证
    expect(clogin).toBeCalled()
    // 状态验证
    expect(getTip()).toBe('登录成功')
  })
})
