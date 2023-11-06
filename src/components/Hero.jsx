import Link from 'next/link'
import { JSIcon } from './icons/JSIcon'
import { PythonIcon } from './icons/PythonIcon'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative mx-auto mt-10 flex max-w-8xl flex-wrap items-start justify-center sm:px-2 lg:px-8 xl:px-12">
      <div className="relative w-full rounded-lg bg-lightblue px-4 pb-20 pt-16 text-center dark:bg-darkcontent md:flex md:flex-wrap md:justify-start md:text-left lg:px-16">
        <div className="z-40 flex flex-col md:w-2/3 md:pr-4 lg:w-1/3">
          <h1 className="pb-6 text-4xl font-semibold dark:text-white">
            <span className="text-primary dark:text-white">Golem</span>{' '}
            developer resources
          </h1>
          <p className=" text-lg text-gray-600 dark:text-gray-400">
            A creator&apos;s manual for Golem. <br /> By developers, for
            developers.
          </p>
          <div className="mt-8 flex flex-col gap-2 md:flex-row">
            <div className="flex justify-center gap-4">
              <Link
                href="/docs/creators/javascript"
                className="flex items-center gap-x-2 rounded bg-primary px-4 py-2 text-base text-white hover:bg-primaryhover dark:bg-darkprimary dark:hover:bg-darkprimary/80"
              >
                <JSIcon className=" h-5 w-5 fill-white " />
                JS docs
              </Link>
              <Link
                href="/docs/creators/python"
                className="flex items-center gap-x-2 rounded bg-primary px-4 py-2 text-base text-white hover:bg-primaryhover dark:bg-darkprimary dark:hover:bg-darkprimary/80"
              >
                <PythonIcon className="h-5 w-5 fill-white  " />
                Python docs
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3 lg:w-1/2">
          <Image
            className="mt-8 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-full lg:w-2/3 lg:scale-x-[-1]  lg:rounded-xl"
            src={'/hero.png'}
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
