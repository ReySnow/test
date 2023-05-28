import { expect, it, vi } from 'vitest'
import { sendEmail } from './stub'

vi.mock('./stub.database', () => {
  return {
    getUserEmail: () => 'test@test.com'
  }
})

it('stub: 隔离依赖', () => {
  const email = sendEmail(1)
  expect(email).toBe('test@test.com')
})
