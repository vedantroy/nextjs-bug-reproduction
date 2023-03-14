if (!globalThis.db) {
  console.log(`Loading database...`)
  const db = {
    data() {
        return "hello"
    }
  }
  globalThis.db = db
}

export default globalThis.db