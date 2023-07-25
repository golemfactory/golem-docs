import React, { useState } from 'react'

export const TabContext = React.createContext()

export function Tabs({ labels, children }) {
  const [currentTab, setCurrentTab] = useState(labels[0])

  return (
    <TabContext.Provider value={currentTab}>
      <nav className="-mb-px flex" aria-label="Tabs">
        {labels.map((label) => (
          <button
            key={label}
            onClick={() => setCurrentTab(label)}
            className={
              currentTab === label
                ? 'w-1/3 border-b-2 border-primary/80 px-1 py-4 text-center text-sm font-medium text-primary'
                : 'w-1/3 border-b-2 border-transparent px-1 py-4 text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }
            aria-current={currentTab === label ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </nav>
      {children}
    </TabContext.Provider>
  )
}
