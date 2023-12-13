import { TutorialIcon } from './icons/TutorialIcon'
import { ExampleIcon } from './icons/ExampleIcon'
import { ArticleIcon } from './icons/ArticleIcon'
import { GuideIcon } from './icons/GuideIcon'
import { WrenchIcon } from '@heroicons/react/24/outline'

export function ArticleType({ type, onlyIcon = false, children }) {
  if (type.toLowerCase() === 'page') return null
  if (type.toLowerCase() === 'noicon') return null

  let IconComponent = null
  let iconClassName = 'h-6 w-6 text-white dark:fill-white '

  switch (type.toLowerCase()) {
    case 'guide':
      IconComponent = <GuideIcon className={iconClassName} />
      break
    case 'tutorial':
      IconComponent = <TutorialIcon className={iconClassName} />
      break
    case 'example':
      IconComponent = <ExampleIcon className={iconClassName} />
      break
    case 'troubleshooting':
      IconComponent = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="0 0 20 20"
          className={'h-6 w-6'}
        >
          <path
            d="M19 5.893a4.893 4.893 0 01-6.681 4.557l-8.167 8.166a1.957 1.957 0 01-2.768-2.768L9.55 7.682a4.893 4.893 0 015.454-6.6c.363.068.463.508.199.766l-2.97 2.898 2.936 2.936 2.985-2.913c.26-.254.692-.152.76.205.056.298.086.605.086.92z"
            fill="#5C5F62"
          />
        </svg>
      )
      break
    default:
      IconComponent = <ArticleIcon className={iconClassName} />
      break
  }

  return (
    <div className="inline-flex items-center gap-x-2 rounded-md  bg-lightbluedarker px-1.5 py-1 font-medium dark:bg-darkcontent dark:text-white">
      {IconComponent}
      {!onlyIcon && (
        <span className="text-sm capitalize text-dark dark:text-white">
          {type}
        </span>
      )}
    </div>
  )
}
