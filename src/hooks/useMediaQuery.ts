import { useState, useEffect } from 'react'

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Verify if the media query matches when the component is mounted
    setMatches(mediaQuery.matches)

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

export default useMediaQuery
