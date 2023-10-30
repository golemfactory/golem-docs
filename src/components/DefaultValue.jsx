import { slugifyWithCounter } from '@sindresorhus/slugify'
import Link from 'next/link'
const slugify = slugifyWithCounter()

function DefaultValue({ title, children, defaultValue, id, referenceLink = null }) {
  return (
    <div className="mb-6 rounded-lg border border-lightbluedarker bg-white p-6 shadow-sm transition-shadow duration-200 dark:border-none dark:bg-darkcontent">
      <h3
        id={id}
        className="mb-4 text-xl font-semibold text-primary dark:text-darkprimary"
      >
        {title}
      </h3>
      {children}
      <div className='-mt-2'>
        <span className="font-medium text-gray-900 dark:text-lightbluedarker">
          Default value:{' '}
        </span>
        {referenceLink ? (
        <Link
          target='_blank'
          rel='noopener noreferrer'
         href={referenceLink} className="text-primary dark:text-darkprimary hover:underline">
          {defaultValue}
        </Link>
        ) : (
          <span className="text-primary dark:text-darkprimary">
          {defaultValue}
        </span>
        ) }
      </div>
    </div>
  )
}

export default DefaultValue
