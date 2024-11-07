import { Repo } from '@/contexts/app.context.types'
import { Octokit } from 'octokit'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

async function getRepos() {
  const response = await octokit.request('GET /users/RanielliMontagna/repos', {
    username: 'RanielliMontagna',
    headers: { 'X-GitHub-Api-Version': '2022-11-28' },
  })

  return response.data as Repo[]
}

export { getRepos }
