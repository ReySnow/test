import { getUserEmail } from './stub.database'

export function sendEmail(userId: number) {
  const email = getUserEmail(userId)
  return email
}
