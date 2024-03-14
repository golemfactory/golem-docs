import { Icon } from '@/components/Icon'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { CheckIcon } from '@/components/icons/CheckIcon'
export function SelectionCard({ children, icon, title, buttonText, href }) {
  return (
    <div className="not-prose">
      <Link
        href={href}
        className="not-prose flex cursor-pointer  flex-col items-center justify-between rounded-md border border-lightbluedarker bg-lightblue p-2 hover:bg-lightblue/50 dark:border-none dark:bg-darkcontent dark:hover:bg-darkcontent/50"
      >
        <div className="flex w-full items-center px-2 py-1">
          <div className="flex items-center justify-center rounded-full bg-white p-2">
            <Icon icon={icon} className="h-6 w-6 fill-dark" />
          </div>
          <span className="ml-4 font-semibold text-dark dark:text-white">
            {title}
          </span>
        </div>
      </Link>
    </div>
  )
}
