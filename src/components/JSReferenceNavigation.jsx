import { useState, useMemo } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { ChevronDownIcon } from '@heroicons/react/24/solid'

const NavigationItem = ({ title, href, isActive }) => (
  <Link
    href={href}
    className={clsx(
      'block w-full pl-3.5  ',
      isActive
        ? 'font-semibold text-primary before:bg-primary dark:text-white dark:before:bg-white'
        : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
    )}
    aria-current={isActive ? 'page' : undefined}
  >
    {title}
  </Link>
)

export const Dropdown = ({ title, children, isActive }) => {
  const [isOpen, setIsOpen] = useState(isActive)
  const router = useRouter()

  const toggleDropdown = () => setIsOpen((prevState) => !prevState)

  return (
    <div>
      <button
        className={clsx(
          'pl-3.5 ',
          isActive
            ? 'font-semibold text-primary before:bg-primary dark:text-white dark:before:bg-white '
            : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
        )}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {title} <ChevronDownIcon className="-mr-1 ml-1 inline-block h-4 w-4" />
      </button>
      {isOpen && (
        <div className="pl-4">
          <ul role="list" className="mt-2 list-none space-y-4 pt-2	">
            {children.map((child) => (
              <li key={child.href} className="relative list-none">
                <NavigationItem
                  title={child.title}
                  href={child.href}
                  isActive={router.pathname === child.href}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

import { navigation } from '@/navigation/jsreference'

export const ReferenceNavigation = ({ items, currentVersion }) => {
  const router = useRouter()

  const currentNavItem = useMemo(() => {
    return navigation.find((item) => item.title === currentVersion)
  }, [currentVersion, navigation])

  if (!currentNavItem) {
    return null
  }

  return (
    <nav aria-label="Navigation" className={clsx('text-base lg:text-sm', null)}>
      <ul role="list" className="space-y-9">
        <li key={currentNavItem.title}>
          <h2 className="font-display font-semibold text-slate-900 dark:text-white">
            Yajsapi API reference
          </h2>
          <ul
            role="list"
            className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
          >
            {currentNavItem.links.map((link) =>
              link.children ? (
                <li key={link.title} className="relative">
                  <Dropdown
                    title={link.title}
                    children={link.children}
                    isActive={link.children.some(
                      (child) => child.href === router.pathname
                    )}
                  />
                </li>
              ) : (
                <li key={link.href} className="relative">
                  <NavigationItem
                    title={link.title}
                    href={link.href}
                    isActive={router.pathname === link.href}
                  />
                </li>
              )
            )}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
