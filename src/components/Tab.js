import React, { useContext } from 'react'
import { TabContext } from './Tabs'

export function Tab({ label, children }) {
  const currentTab = useContext(TabContext)

  return currentTab === label ? children : null
}
