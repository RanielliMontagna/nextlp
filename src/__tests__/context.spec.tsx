import { renderHook } from '@testing-library/react'
import { AppProvider, useAppContext } from '@/contexts/app.context'
import { getRepos } from '@/libs/octokit'
import { mockRepos } from './mocks'

// Mock the getRepos function
vi.mock('@/libs/octokit', () => ({
  getRepos: vi.fn(),
}))

describe('Context', () => {
  beforeEach(() => {
    vi.mocked(getRepos).mockReturnValue(new Promise((resolve) => resolve(mockRepos)))
  })

  describe('app', () => {
    it('should return an array of repos', async () => {
      const { result } = renderHook(() => useAppContext(), {
        wrapper: ({ children }) => <AppProvider>{children}</AppProvider>,
      })

      expect(result.current.repos).toBeInstanceOf(Array)
    })

    it('return an empty object if not wrapped in AppProvider', () => {
      const { result } = renderHook(() => useAppContext())

      expect(result.current).toMatchObject({})
    })

    it('not crash if return error on getRepos', async () => {
      vi.mocked(getRepos).mockReturnValue(new Promise((_, reject) => reject(new Error('error'))))

      const { result } = renderHook(() => useAppContext(), {
        wrapper: ({ children }) => <AppProvider>{children}</AppProvider>,
      })

      expect(result.current.repos).toBeInstanceOf(Array)
    })
  })
})
