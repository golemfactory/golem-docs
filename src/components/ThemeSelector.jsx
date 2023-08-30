import { Switch } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const themes = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ThemeToggler() {
  const [enabled, setEnabled] = useState(false)
  let [selectedTheme, setSelectedTheme] = useState(null)

  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.setAttribute('data-theme', selectedTheme.value)
    } else {
      setSelectedTheme(
        themes.find(
          (theme) =>
            theme.value === document.documentElement.getAttribute('data-theme')
        )
      )
    }
    if (selectedTheme?.value === 'dark') {
      setEnabled(true)
    }
  }, [selectedTheme])

  useEffect(() => {
    let handler = () =>
      setSelectedTheme(
        themes.find(
          (theme) => theme.value === (window.localStorage.theme ?? 'system')
        )
      )

    window.addEventListener('storage', handler)

    return () => window.removeEventListener('storage', handler)
  }, [])

  return (
    <Switch
      checked={enabled}
      onChange={() => {
        setEnabled(!enabled)
        if (selectedTheme.value === 'dark') {
          setSelectedTheme(themes.find((theme) => theme.value === 'light'))
        } else {
          setSelectedTheme(themes.find((theme) => theme.value === 'dark'))
        }
      }}
      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none "
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute h-full w-full rounded-md "
      />

      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'bg-[#DDDEE8]' : 'bg-[#525369]',
          'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
        )}
      />

      {enabled ? (
        <MoonIcon
          aria-hidden="true"
          className={classNames(
            enabled
              ? 'translate-x-5 bg-[#BABCDC] rotate-[230deg] '
              : 'translate-x-0 bg-lightbluedarker',

            'pointer-events-none absolute left-0 inline-block h-5 w-5 transform items-center rounded-full  p-0.5   transition-transform duration-200  ease-in-out'
          )}
        >
          {' '}
        </MoonIcon>
      ) : (
        <SunIcon
          aria-hidden="true"
          className={classNames(
            enabled
              ? 'translate-x-5 bg-[#BABCDC]'
              : 'translate-x-0 bg-[#34354B] fill-white',
            'pointer-events-none absolute left-0 inline-block h-5 w-5 transform items-center rounded-full p-0.5  transition-transform duration-200  ease-in-out'
          )}
        >
          {' '}
        </SunIcon>
      )}
    </Switch>
  )
}
