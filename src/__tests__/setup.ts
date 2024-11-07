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
