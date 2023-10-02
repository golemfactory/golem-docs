import { TutorialIcon } from './icons/TutorialIcon'
import { ExampleIcon } from './icons/ExampleIcon'
import { ArticleIcon } from './icons/ArticleIcon'
import { GuideIcon } from './icons/GuideIcon'

export function ArticleType({ type, children }) {
  if (type.toLowerCase() === 'page') return null
  if (type.toLowerCase() === 'noicon') return null

  return (
    <div className="inline-flex items-center gap-x-2 rounded-2xl bg-lightbluedarker px-1.5 py-1 font-medium">
      {type.toLowerCase() === 'guide' ? (
        <TutorialIcon className="h-6 w-6 text-white" />
      ) : type.toLowerCase() === 'tutorial' ? (
        <ExampleIcon className="h-6 w-6 text-white" />
      ) : type.toLowerCase() === 'example' ? (
        <GuideIcon className="h-6 w-6 text-white" />
      ) : (
        <ArticleIcon className="h-6 w-6 text-white" />
      )}
      <span className="text-sm capitalize text-dark">{type.toLowerCase()}</span>
    </div>
  )
}
