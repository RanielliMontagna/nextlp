import { getRepos } from '@/libs/octokit'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { AppContextProps, Repo } from './app.context.types'

export const AppContext = createContext({} as AppContextProps)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Repo[]>([])
  const [projectsIsLoading, setProjectsIsLoading] = useState(true)

  async function fetchProjects() {
    setProjectsIsLoading(true)

    try {
      const response = await getRepos()

      const sortedProjects = response.sort((a, b) => {
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      })

      const filteredProjects = sortedProjects.filter((project) => {
        return !project.fork && !project.archived && project.description
      })

      setProjects(filteredProjects)
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setProjectsIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <AppContext.Provider value={{ projects, projectsIsLoading }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext() must be used within an <AppProvider />')
  }

  return context
}
