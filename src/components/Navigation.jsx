import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const isActive = (item, router) => {
  if (
    item.href &&
    (router.pathname === item.href || router.pathname === `${item.href}/`)
  ) {
    return true
  }
  return item.children?.some((child) => isActive(child, router)) || false
}

export const MenuBar = ({ navigation }) => {
  const router = useRouter()

  return (
    <div className="ml-4 hidden gap-x-6 lg:flex">
      {navigation.normalNavLinks.map((item) => {
        return (
          <Link
            className="text-base text-primary dark:text-lightergray"
            key={item.title}
            target={item.links[0].href.startsWith('http') ? '_blank' : '_self'}
            rel={item.links[0].href.startsWith('http') ? 'noopener noreferrer' : ''}
            href={item.links[0].href}
          >
            {item.title}
          </Link>
        )
      })}
    </div>
  )
}

export const SideBar = ({ navigation }) => {
  const router = useRouter()

  const isActive = (item) => {
    if (
      item.href &&
      (router.pathname === item.href || router.pathname === `${item.href}/`)
    ) {
      return true
    }
    return item.children?.some(isActive) || false
  }

  const currentSection = navigation.find((section) =>
    section.links.some(isActive)
  )

  const renderNavItems = (items) =>
    items.map((item) => {
      const itemIsActive = isActive(item)
      const hasChildren = item.children?.length

      return (
        <li className="py-0.5 text-sm" key={item.href || item.title}>
          {hasChildren ? (
            <Dropdown isActive={isActive(item, router)}>
              {[
                <NavigationItem
                  item={item}
                  isActive={itemIsActive}
                  key={item.title}
                />,
                renderNavItems(item.children),
              ]}
            </Dropdown>
          ) : (
            <NavigationItem item={item} isActive={itemIsActive} />
          )}
        </li>
      )
    })

  return currentSection ? (
    <nav>
      <h1 className="mb-2 text-base font-semibold dark:text-white">
        {currentSection.title}
      </h1>
      <ul role="list">{renderNavItems(currentSection.links)}</ul>
    </nav>
  ) : null
}

export const NavigationItem = ({ item, isActive }) =>
  item.href ? (
    <Link
      href={item.href}
      aria-current={isActive ? 'page' : undefined}
      target={item.href.startsWith('http') ? '_blank' : '_self'}
      rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
      className={`break-words py-0.5
      ${isActive ? 'text-primary dark:text-darkprimary ' : 'dark:text-white/50'}
      `}
    >
      {item.title}
    </Link>
  ) : (
    <span
      className={clsx('py-0.5 text-sm text-left', {
        'text-primary dark:text-darkprimary': isActive,
      })}
    >
      {item.title}
    </span>
  )

export const Dropdown = ({ children, isActive }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(isActive)
  }, [isActive])

  const btnClick = () => setIsOpen((prev) => !prev)

  return (
    <div>
      <button
        className="flex items-center gap-x-2 dark:text-white/50"
        onClick={btnClick}
        aria-expanded={isOpen}
      >
        {children[0]}
        <ChevronDownIcon className="h-3 w-3" />
      </button>
      {isOpen && <div className="ml-4">{children.slice(1)}</div>}
    </div>
  )
}

export const Navigation = ({ className, links, title = '' }) => {
  const router = useRouter()

  const isActive = (item) =>
    item.href &&
    (router.pathname === item.href || router.pathname === item.href)

  const renderNavItems = (items) =>
    items.map((item) => {
      const itemIsActive = isActive(item)
      const hasChildren = item.children?.length

      return (
        <li className="not-prose  text-sm" key={item.href || item.title}>
          {hasChildren ? (
            <Dropdown isActive={isActive(item, router)}>
              {[
                <NavigationItem
                  item={item}
                  isActive={itemIsActive}
                  key={item.title}
                />,
                renderNavItems(item.children),
              ]}
            </Dropdown>
          ) : (
            <NavigationItem item={item} isActive={itemIsActive} />
          )}
        </li>
      )
    })

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      {links.map((section) => (
        <div className="mb-4" key={section.title}>
          <h1 className="font-display mb-2 text-base font-semibold text-slate-900 dark:text-white">
            {title ? title : section.title}
          </h1>
          <ul role="list" className="not-prose ml-4">
            {renderNavItems(section.links)}
          </ul>
        </div>
      ))}
    </nav>
  )
}
