import { Icon } from '@/components/Icon'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { CheckIcon } from '@/components/icons/CheckIcon'
export function SelectionCard({ children, icon, title, buttonText, href }) {
  return (
    <div className="not-prose flex min-h-full flex-col justify-between rounded-md border border-lightbluedarker dark:border-none bg-lightblue dark:bg-darkcontent">
      <div>
        <div className="font-medium">
          <div className="flex items-center gap-x-4 p-6">
            <div className="flex items-center justify-center rounded-full bg-white p-2">
              <Icon icon={icon} className="h-6 w-6 fill-dark" />
            </div>
            <h2 className=" font-semibold text-dark dark:text-white">
              {title}
            </h2>
          </div>
        </div>

        <div className="mb-12 mt-4 flex flex-grow flex-col gap-3 rounded-md px-6">
          {children.map((child, index) => (
            <div key={index} className="not-prose flex items-start gap-x-2">
              <CheckIcon className="mt-1.5 h-4 w-4 flex-shrink-0 fill-dark dark:fill-white dark:opacity-50" />
              <div className="text-base text-dark dark:text-white dark:text-opacity-50">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <Link
          href={href}
          className="not-prose inline-flex cursor-pointer items-center gap-x-2 rounded bg-primary px-4 py-1 text-base font-medium text-white hover:bg-primaryhover dark:bg-darkprimary dark:hover:bg-darkprimary/80"
        >
          {buttonText} <ArrowRightIcon className="h-3.5 w-3.5 fill-white" />
        </Link>
      </div>
    </div>
  )
}
