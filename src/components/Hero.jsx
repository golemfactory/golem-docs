import { JSIcon } from './icons/JSIcon'
import { PythonIcon } from './icons/PythonIcon'

export function Hero() {
  return (
    <div className="relative mx-auto mt-10 flex max-w-8xl sm:px-2 lg:px-8 xl:px-12">
      <div className="w-full rounded-lg bg-lightblue px-4 pb-20 pt-16 text-center dark:bg-darkcontent md:text-left lg:px-16">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-5 md:gap-y-0">
          <div className="z-40 col-span-1 md:col-span-2">
            <h1 className="pb-6 text-4xl font-semibold dark:text-white">
              <span className="text-primary dark:text-white">Golem</span>{' '}
              developer resources
            </h1>
            <p className=" text-lg text-gray-600 dark:text-gray-400">
              A creators manual for Golem. <br /> By developers, for developers.
            </p>
            <div className="mt-8 grid gap-y-2 md:flex md:gap-x-2">
              <div className="flex gap-x-4">
                <div className="text-center">
                  <a
                    href="/docs/javascript/demo"
                    className="flex items-center rounded bg-primary px-4 py-2 text-white hover:bg-blue-600 dark:bg-darkprimary dark:hover:bg-darkprimary/80"
                  >
                    <JSIcon className="mr-1 mt-1 h-5 w-5 " />
                    JS docs
                  </a>
                </div>
                <div className="group relative inline-flex">
                  <span className="inline-flex items-center rounded bg-lightergray px-4 py-1 font-medium	 text-white dark:bg-disabledgray">
                    <PythonIcon className="mr-1 mt-1 h-5 w-5 " />
                    Python docs
                  </span>
                  <div
                    className="absolute left-1/2 m-4 mx-auto inline-flex -translate-x-1/2 translate-y-full font-medium	 items-center whitespace-nowrap rounded-md 
      bg-gray-800 px-4 py-2 text-xs text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Coming soon!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="hidden md:absolute md:right-5 md:top-0 md:block md:h-full md:w-auto md:rounded-xl "
            src={'/hero.png'}
            alt=""
          />
          <div className="md:col-span-3 md:col-start-4">
            <div className="relative h-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
