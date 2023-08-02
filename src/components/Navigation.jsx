import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { navigation } from '@/navigation/docs'
import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export const NavigationItem = ({ item, isActive }) =>
  item.href ? (
    <Link
      href={item.href}
      aria-current={isActive ? 'page' : undefined}
      className={`
      ${isActive ? 'text-primary dark:text-darkprimary' : 'dark:text-white/50'}
      `}
    >
      {item.title}
    </Link>
  ) : (
    <span className={clsx({ 'text-primary': isActive })}>{item.title}</span>
  )

export const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
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
        <li className="not-prose mt-1.5" key={item.href || item.title}>
          {hasChildren ? (
            <Dropdown isActive={items.some(isActive)}>
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
          <h1 className="font-display font-semibold text-slate-900 dark:text-white">
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
