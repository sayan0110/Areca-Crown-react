const loaded = new Map<string, Promise<void>>()

// Loads a classic (non-module) script once and resolves when it has run.
export function loadScript(src: string): Promise<void> {
  let promise = loaded.get(src)
  if (!promise) {
    promise = new Promise((resolve, reject) => {
      const el = document.createElement('script')
      el.src = src
      el.onload = () => resolve()
      el.onerror = () => reject(new Error(`Failed to load ${src}`))
      document.body.appendChild(el)
    })
    loaded.set(src, promise)
  }
  return promise
}
