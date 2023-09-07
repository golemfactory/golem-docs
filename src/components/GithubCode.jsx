import { useEffect, useState } from 'react'
import { Fence } from './Fence'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const res = fetch(url)
  const text = res.text()
  setData(text)
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
