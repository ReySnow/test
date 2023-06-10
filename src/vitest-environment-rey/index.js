export default {
  name: 'custom rey',
  setup(global) {
    console.log('custom rey setup')
    global.localStorage = {
      getItem() {},
      setItem() {}
    }

    return {
      teardown() {}
    }
  }
}
