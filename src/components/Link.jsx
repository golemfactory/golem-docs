import { UnionIcon } from './icons/UnionIcon'
import { Icon } from '@/components/Icon'
import { useRouter } from 'next/router'
import { default as NextLink } from 'next/link'

export function Link({ href, title, icon = '', hideunion = false }) {
  const router = useRouter()
  return (
    <NextLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      referrerPolicy="origin"
      className=" my-6 inline-flex items-center gap-x-2 rounded-md border border-primary  px-3 py-2 text-center  text-base font-medium capitalize text-primary dark:border-darkprimary dark:text-darkprimary"
    >
      {icon && (
        <Icon
          icon={icon}
          className="block h-5 w-5 fill-primary text-primary dark:fill-darkprimary dark:text-darkprimary"
        />
      )}
      {title}

      {!hideunion && (
        <UnionIcon className="-ml-1 -mt-3 fill-primary dark:fill-darkprimary" />
      )}
    </NextLink>
  )
}
