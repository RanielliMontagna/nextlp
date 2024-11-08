// Mock do IntersectionObserver to avoid error - "IntersectionObserver is not defined" in tests
global.IntersectionObserver = class {
  root: Element | null = null
  rootMargin: string = ''
  thresholds: ReadonlyArray<number> = []

  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

// Mock window.open to avoid error - "window.open is not a function" in tests
global.open = vi.fn()

// Mock console.error to avoid error
global.console.error = vi.fn()

// Mock do matchMedia to avoid error - "matchMedia is not defined" in tests
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addEventListener: function () {},
      removeEventListener: function () {},
      addListener: function () {}, // Para compatibilidade com código antigo
      removeListener: function () {}, // Para compatibilidade com código antigo
      dispatchEvent: function () {
        return false
      },
    }
  }
