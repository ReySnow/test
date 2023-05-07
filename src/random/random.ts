export function generateRandomStrings(len: number): string {
  let strings = 'abcdefghijklmnoprstuvwxyABCDEFGHIJKLMNOPRSTUVWXYZ'
  let strs = ''
  for (let i = 0; i < len; i++) {
    let random = Math.floor(Math.random() * strings.length)
    strs += strings[random]
  }
  return strs
}
