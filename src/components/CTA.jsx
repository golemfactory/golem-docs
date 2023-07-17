import Link from 'next/link'
import { DiscordIcon } from './icons/DiscordIcon'
export function CTA({ title, description, imageUrl, buttonText, href }) {
  return (
    <div className="not-prose w-full rounded-lg bg-secondary p-4 dark:bg-gray-800 ">
      <div className="relative grid gap-y-4 md:grid-cols-2 md:gap-y-4">
        <img
          className="hidden md:absolute md:block md:h-full md:w-full md:rounded-xl md:object-contain lg:-left-48"
          src={imageUrl}
          alt=""
        />
        <div className="relative h-full w-full"></div>
        <img
          className="rounded-xl object-cover md:hidden"
          src={imageUrl}
          alt=""
        />
        <div className="first-letter: z-50 grid items-center gap-y-4 px-12 py-8">
          <p className="text-3xl font-semibold text-black dark:text-white">
            {title}
          </p>
          <p className=" text-gray-500">{description}</p>
          <div className=" mt-4 flex lg:mt-0">
            <Link
              href={href}
              className="flex h-full items-center rounded bg-primary px-4 py-2 text-sm text-white hover:bg-primary/80"
            >
              <DiscordIcon className="mr-2 h-5 w-5 fill-white" />

              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
