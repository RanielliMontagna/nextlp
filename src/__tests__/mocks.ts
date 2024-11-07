import { Repo } from '@/contexts/app.context.types'

export const mockRepos = [
  {
    id: 1,
    name: 'Repo 1',
    pushed_at: '2023-01-01T00:00:00Z',
    fork: false,
    archived: false,
    description: 'Description 1',
  },
  {
    id: 2,
    name: 'Repo 2',
    pushed_at: '2023-01-02T00:00:00Z',
    fork: false,
    archived: false,
    description: 'Description 2',
  },
] as Repo[]

// more then 9 repos
export const mockMoreThen9Repos = [
  ...new Array(10).fill((_, index) => ({
    id: index,
    name: `Repo ${index}`,
    pushed_at: '2023-01-01T00:00:00Z',
    fork: false,
    archived: false,
    description: `Description ${index}`,
  })),
] as Repo[]
