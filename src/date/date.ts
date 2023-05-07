export function checkFirday(): string {
  let day = new Date()
  if (day.getDay() === 5) {
    return 'happy'
  } else {
    return 'unhappy'
  }
}
