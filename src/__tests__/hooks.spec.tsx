import { useMediaQuery } from '@/hooks/useMediaQuery'
import { act, renderHook } from '@testing-library/react'

describe('Hooks', () => {
  it('should return false when the media query does not match', () => {
    // Mock window.matchMedia
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(), // For compatibility with older browsers
      removeListener: vi.fn(), // For compatibility with older browsers
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'))

    expect(result.current).toBe(false)
  })

  it('should return true when the media query matches', () => {
    // Mock window.matchMedia
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(), // For compatibility with older browsers
      removeListener: vi.fn(), // For compatibility with older browsers
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'))

    expect(result.current).toBe(true)
  })

  it('should update matches when the media query changes', () => {
    const addEventListenerMock = vi.fn()
    const removeEventListenerMock = vi.fn()

    // Mock window.matchMedia
    const matchMediaMock = vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: addEventListenerMock,
      removeEventListener: removeEventListenerMock,
      addListener: vi.fn(), // For compatibility with older browsers
      removeListener: vi.fn(), // For compatibility with older browsers
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'))

    expect(result.current).toBe(false)

    // Simulate a change in the media query
    act(() => {
      const handleChange = addEventListenerMock.mock.calls[0][1]
      handleChange({ matches: true })
    })

    expect(result.current).toBe(true)

    // Clean up
    matchMediaMock.mockRestore()
  })
})
