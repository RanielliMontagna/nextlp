import { getRepos } from '@/libs/octokit'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { AppContextProps, Repo } from './app.context.types'

export const AppContext = createContext({} as AppContextProps)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [reposIsLoading, setReposIsLoading] = useState(true)

  async function fetchRepo() {
    setReposIsLoading(true)

    try {
      const response = await getRepos()

      const sortedRepo = response.sort((a, b) => {
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      })

      const filteredRepo = sortedRepo.filter((project) => {
        return !project.fork && !project.archived && project.description
      })

      setRepos(filteredRepo)
    } catch (error) {
      console.error('Error fetching repo:', error)
    } finally {
      setReposIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRepo()
  }, [])

  return <AppContext.Provider value={{ repos, reposIsLoading }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  return context
}
