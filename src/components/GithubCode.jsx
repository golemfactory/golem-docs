import { useEffect, useState } from 'react'
import { Fence } from './Fence'

export function GithubCode({ children, code, language = 'js' }) {
  return <Fence language={language} content={code} />
}
