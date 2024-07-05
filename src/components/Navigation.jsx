import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useLocale } from '@/context/LocaleContext' // Import the context

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
  return (
    <div className="ml-4 hidden gap-x-6 lg:flex">
      {navigation.map((item) => {
        return (
          <Link
            className="text-base text-primary dark:text-lightergray"
            key={item.title}
            target={item.links[0].href.startsWith('http') ? '_blank' : '_self'}
            rel={
              item.links[0].href.startsWith('http') ? 'noopener noreferrer' : ''
            }
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
  const { locale } = useLocale()

  const isActive = (item) => {
    if (!item.href) return false
    const { pathname } = router
    const itemPath = item.href.replace(/^\/docs\/(en|ja)/, '')
    const currentPath = pathname.replace(/^\/docs\/(en|ja)/, '')
    return (
      itemPath && (currentPath === itemPath || currentPath === `${itemPath}/`)
    )
  }

  const isActiveOrHasActiveChild = (item) => {
    if (isActive(item)) return true
    return item.children?.some(isActiveOrHasActiveChild) || false
  }

  const currentSection = navigation.find((section) =>
    section.links.some(isActiveOrHasActiveChild)
  )

  const renderNavItems = (items) => {
    return items.map((item) => {
      const itemIsActive = isActive(item)
      const hasChildren = item.children?.length
      const isExpanded = hasChildren && isActiveOrHasActiveChild(item)

      return (
        <li className="py-0.5 text-sm" key={item.title}>
          {hasChildren ? (
            <Dropdown isActive={isExpanded}>
              <NavigationItem item={item} isActive={itemIsActive} />
              <ul className="ml-4">{renderNavItems(item.children)}</ul>
            </Dropdown>
          ) : (
            <NavigationItem item={item} isActive={itemIsActive} />
          )}
        </li>
      )
    })
  }

  useEffect(() => {
    const currentPath = router.asPath
    const localizedPath = currentPath.replace(
      /^\/docs\/(en|ja)/,
      `/docs/${locale}`
    )

    if (currentPath !== localizedPath) {
      router.push(localizedPath)
    }
  }, [locale, router])

  return currentSection ? (
    <nav>
      <h4 className="mb-2 text-base font-semibold dark:text-white">
        {currentSection.title}
      </h4>
      <ul role="list">{renderNavItems(currentSection.links)}</ul>
    </nav>
  ) : null
}

export const NavigationItem = ({ item, isActive }) => {
  return item.href ? (
    <Link
      href={item.href}
      aria-current={isActive ? 'page' : undefined}
      target={item.href.startsWith('http') ? '_blank' : '_self'}
      rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
      className={`break-words py-0.5
      ${isActive ? 'text-primary dark:text-[#3961fb] ' : 'dark:text-white/70'}
      `}
    >
      {item.title}
    </Link>
  ) : (
    <span
      className={clsx('py-0.5 text-left text-sm', {
        'text-primary dark:text-[#3961fb]': isActive,
      })}
    >
      {item.title}
    </span>
  )
}

export const Dropdown = ({ children, isActive }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(isActive)
  }, [isActive])

  const btnClick = () => setIsOpen((prev) => !prev)

  return (
    <div>
      <button
        className="flex items-center gap-x-2 dark:text-white/70"
        onClick={btnClick}
        aria-expanded={isOpen}
      >
        {children[0]}
        <ChevronDownIcon className="h-3 w-3" />
      </button>
      {isOpen && <div >{children.slice(1)}</div>}
    </div>
  )
}

export const Navigation = ({ className, links, title = '' }) => {
  const router = useRouter()

  const isActive = (item) => {
    const { pathname } = router
    return item.href && (pathname === item.href || pathname === `${item.href}/`)
  }
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
