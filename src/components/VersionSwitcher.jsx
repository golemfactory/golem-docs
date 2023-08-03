import { useMemo, useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {
  navigation as JSReference,
  latestJSVersion,
} from '@/navigation/jsreference'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const VersionSwitcher = ({}) => {
  const [currentVersion, setCurrentVersion] = useState(latestJSVersion)
  const router = useRouter()
  const versions = useMemo(
    () => Object.values(JSReference).map((navItem) => navItem.title),
    [JSReference]
  )

  const isOnDocsPath = router.pathname.startsWith('/docs/yajsapi/reference')

  useEffect(() => {
    if (isOnDocsPath) {
      const findCurrentVersion = () => {
        const matchingNavItem = Object.values(JSReference).find(
          (navItem) => navItem.pathname === router.pathname
        )
        if (matchingNavItem) {
          setCurrentVersion(matchingNavItem.title)
        }
      }

      findCurrentVersion()
    }
  }, [router, isOnDocsPath, JSReference, setCurrentVersion])

  const switchVersion = (version) => {
    if (isOnDocsPath) {
      setCurrentVersion(version)
      const newPath = router.asPath.replace(
        /\/docs\/yajsapi\/reference\/[^/]+/,
        `/docs/yajsapi/reference/${version}`
      )
      router.push(newPath)
    }
  }

  const getDisplayVersion = (version) => {
    return version === versions[versions.length - 1]
      ? `latest (${version})`
      : version
  }

  return isOnDocsPath ? (
    <Listbox value={currentVersion} onChange={switchVersion}>
      {({ open }) => (
        <>
          <div className="version-switcher fixed bottom-4 right-4 z-50">
            <Listbox.Button className="relative w-full cursor-default rounded-sm bg-primary py-1.5 pl-3 pr-10 text-left text-white focus:outline-none">
              <span className="block truncate">
                {getDisplayVersion(currentVersion)}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute bottom-full z-10 mb-2 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {versions.map((version, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-primary text-white' : 'text-gray-900',
                        'relative cursor-default select-none px-4 py-2'
                      )
                    }
                    value={version}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {getDisplayVersion(version)}
                        </span>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-primary',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  ) : null
}

export default VersionSwitcher
