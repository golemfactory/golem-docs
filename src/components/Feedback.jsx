import { LikeIcon } from './icons/LikeIcon'
import { DislikeIcon } from './icons/DislikeIcon'
export const Feedback = () => {
  return (
    <div className="my-6 w-full rounded-md bg-lightblue py-12 text-center">
      <h1 className="text-2xl font-bold">Was this article helpful?</h1>
      <div className="mt-6 flex justify-center">
        <button className="mr-4 flex  items-center rounded-md border border-primary px-4 py-2 text-primary">
          <LikeIcon className="mr-2 h-5 w-5 fill-primary" />
          Yes
        </button>
        <button className="flex items-center rounded-md border border-primary px-4 py-2 text-primary">
          <DislikeIcon className="mr-2 h-5 w-5 fill-primary" />
          No
        </button>
      </div>
    </div>
  )
}
