import { useMemo } from 'react'

import { Navigation } from './Navigation'

import { navigation, latestJSVersion } from '@/navigation/jsreference'

export const ReferenceNavigation = ({}) => {
  const currentNavItem = useMemo(() => {
    return navigation.find((item) => item.title === latestJSVersion)
  }, [latestJSVersion, navigation])

  if (!currentNavItem) {
    return null
  }

  return <Navigation links={navigation} title="Yajsapi API reference" />
}
