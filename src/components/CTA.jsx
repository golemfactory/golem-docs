import Link from 'next/link'
import { DiscordIcon } from './icons/DiscordIcon'
import Image from 'next/image'
export function CTA({ title, description, imageUrl, buttonText, href }) {
  return (
    <div className="not-prose relative w-full rounded-lg bg-lightblue px-4 pb-20 pt-16 dark:bg-darkcontent">
      <Image
        src={imageUrl}
        alt="Description of Image"
        width={800}
        height={800}
        className="hidden md:absolute md:left-0 md:top-5 md:block"
      />

      <div className="relative grid gap-y-4 md:grid-cols-2 md:gap-y-4">
        <div className="relative h-full w-full"></div>
        <Image
          className="rounded-xl object-cover md:hidden"
          src={imageUrl}
          width={500}
          height={500}
          alt=""
        />
        <div className="first-letter: z-30 grid items-center gap-y-4 px-12 ">
          <p className="text-3xl font-semibold text-dark dark:text-white ">
            {title}
          </p>
          <p className=" text-base text-normalgray dark:text-white dark:opacity-50">
            {description}
          </p>
          <div className=" mt-4 flex">
            <Link
              href={href}
              className="flex h-full items-center rounded bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/80 dark:bg-darkprimary dark:hover:bg-darkprimary/80"
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
