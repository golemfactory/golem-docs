import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { navigation } from '@/navigation/docs'
import { Dropdown } from './JSReferenceNavigation'

export const Navigation = ({ className }) => {
  const router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => {
          const isActive = section.links.some(
            (link) => link.href === router.pathname
          )
          return (
            <li key={section.title}>
              {section.links.length ? (
                <Dropdown title={section.title} isActive={isActive}>
                  {section.links}
                </Dropdown>
              ) : (
                <h2 className="font-display font-medium text-slate-900 dark:text-white">
                  {section.title}
                </h2>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
