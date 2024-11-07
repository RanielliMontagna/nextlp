import { getRepos } from '@/libs/octokit'

describe('Libs', () => {
  describe('Octokit', () => {
    it('should return an array of repos', async () => {
      const repos = await getRepos()

      expect(repos).toBeInstanceOf(Array)
    })
  })
})
