export function sayHi() {
  setInterval(() => {
    console.log('hi')
  }, 100)
}
export function sayHiV2() {
  setTimeout(() => {
    setInterval(() => {
      console.log('hi')
    }, 100)
  }, 1000)
}
