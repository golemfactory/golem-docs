import React, { useState } from 'react'

export const TabContext = React.createContext()

export function Tabs({ labels, children }) {
  const [currentTab, setCurrentTab] = useState(labels[0])

  return (
    <TabContext.Provider value={currentTab}>
      <nav className="-mb-px flex gap-x-2 my-6" aria-label="Tabs">
        {labels.map((label) => (
          <button
            key={label}
            onClick={() => setCurrentTab(label)}
            className={
              currentTab === label
                ? ' rounded-md border-lightbluedarker bg-lightbluedarker px-3 py-2 text-center text-sm font-medium text-primary'
                : 'rounded-md border border-lightbluedarker px-3 py-2 text-center  text-sm'
            }
            aria-current={currentTab === label ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="mt-4 mb-12 border border-lightbluedarker px-3 rounded-md">{children}</div>
    </TabContext.Provider>
  )
}
