import { createContext, useContext, useState } from 'react'

const LocaleContext = createContext()

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('selectedLocale') ||
          (['en', 'ja', 'ja-JP', 'ja-JP-mac'].includes(navigator.language)
            ? navigator.language
            : 'en')
      : 'en'
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
