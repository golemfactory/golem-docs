import { useEffect, useState } from 'react'
import { Fence } from './Fence'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchGhCode = async () => {
      const res = await fetch(url)
      const text = await res.text()
      setData(text)
    }
    fetchGhCode()
  }, [url])
  return data
}

export function GithubCode({ children, githubPath, language = 'js' }) {
  const code = useFetch(
    `https://raw.githubusercontent.com/golemfactory/golem-js/master/${githubPath}`
  )
  console.log('FETCHED CODE', code, githubPath)
  if (!code) return null
  return <Fence language={language} content={code} />
}
