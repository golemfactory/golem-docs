import NextLink from 'next/link'
import { UnionIcon } from './icons/UnionIcon'
import { Icon } from '@/components/Icon'

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="warning" color="amber" {...props} />,
}

export function Link({ href, title, icon = '', hideunion = false }) {
  let IconComponent = icons[icon]
  return (
    <div className="not-prose">
      <NextLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="test my-6 inline-flex items-center gap-x-2 rounded-md border border-primary  px-3 py-2 text-center  text-sm font-semibold capitalize text-primary"
      >
        {icon && (
          <Icon
            icon={icon}
            className="block h-5 w-5 fill-primary text-primary"
          />
        )}
        {title}

        {!hideunion && <UnionIcon className="-ml-1 -mt-3 fill-primary" />}
      </NextLink>
    </div>
  )
}
