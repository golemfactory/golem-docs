import { useState, useMemo } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Dropdown, Navigation, NavigationItem } from './Navigation'

import { navigation } from '@/navigation/jsreference'

export const ReferenceNavigation = ({ items, currentVersion }) => {
  const router = useRouter()

  const currentNavItem = useMemo(() => {
    return navigation.find((item) => item.title === currentVersion)
  }, [currentVersion, navigation])

  if (!currentNavItem) {
    return null
  }

  console.log(currentNavItem)
  console.log(navigation)

  return <Navigation links={navigation} title="Yajsapi API reference" />
}
