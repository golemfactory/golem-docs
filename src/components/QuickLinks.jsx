import Link from 'next/link'

import { Icon } from '@/components/Icon'

export function QuickLinks({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}

export function QuickLink({
  title,
  description,
  href,
  icon,
  buttonText,
  disabled = false,
}) {
  return (
    <div
      className={`not-prose group relative flex h-full flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 ${
        disabled
          ? ' bg-gray-50 dark:bg-gray-800/30'
          : 'bg-secondary dark:bg-gray-800'
      }`}
    >
      <div className="relative grid gap-y-4 overflow-hidden p-6">
        <Icon icon={icon} className="h-full w-full" />
        <h2
          className={`font-display text-xl font-semibold 
        ${disabled ? ' text-gray-500' : 'text-slate-900 dark:text-white'}
        `}
        >
          {title}
        </h2>
        <p className="max-h-[12em] overflow-hidden  text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </div>
      <div className=" p-6">
        {disabled ? (
          <button
            className="not-prose cursor-not-allowed rounded bg-gray-400 px-4 py-2 text-sm text-white dark:bg-gray-700/20"
            disabled
          >
            Available Soon
          </button>
        ) : (
          <Link
            href={href}
            className="not-prose cursor-pointer rounded bg-primary px-4 py-2 text-sm text-white hover:bg-primary/80"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  )
}
