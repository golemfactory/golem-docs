import React from 'react'
import { useEffect, useState } from 'react'
import { AnalyticsBanner } from './AnalyticsBanner'

export const AnalyticsEnabler = (props) => {
  const [previousConsent, setPreviousConsent] = useState(false)
  const [askedForConsent, setAskedForConsent] = useState(true)

  useEffect(() => {
    const isAnalyticsEnabled = localStorage.getItem('GDocscookieConsent')

    if (isAnalyticsEnabled === null) {
      setAskedForConsent(false)
    }

    if (isAnalyticsEnabled === 'true') {
      setPreviousConsent(true)
    } else {
      setPreviousConsent(false)
    }
  }, [])

  if (!askedForConsent) {
    return (
      <AnalyticsBanner
        setPreviousConsent={setPreviousConsent}
        setAskedForConsent={setAskedForConsent}
      />
    )
  }

  if (previousConsent) {
    return <>{props.children}</>
  }
  return null
}
