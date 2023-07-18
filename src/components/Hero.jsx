import { JSIcon } from './icons/JSIcon'
import { PythonIcon } from './icons/PythonIcon'

export function Hero() {
  return (
    <div className="relative mx-auto mt-10 flex max-w-8xl sm:px-2 lg:px-8 xl:px-12">
      <div className="w-full rounded-lg bg-secondary px-4 py-12 text-center dark:bg-gray-800 md:text-left lg:px-24">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-5 md:gap-y-0">
          <div className="z-40 col-span-1 md:col-span-2">
            <h1 className=" text-4xl font-semibold dark:text-white">
              <span className="text-primary">Golem</span> developer resources
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              A creators manual for Golem. <br /> By developers, for developers.
            </p>
            <div className="mt-8 grid gap-y-2 md:flex md:gap-x-2">
              <div className="grid grid-cols-2 justify-items-center">
                <div className="">
                  <a
                    href="/docs"
                    className=" flex items-center rounded   bg-primary px-3 py-2 text-white hover:bg-blue-600"
                  >
                    <JSIcon className="mr-1 mt-1 h-5 w-5 " />
                    JS docs
                  </a>
                </div>
                <div className="group relative flex">
                  <span className="flex items-center bg-gray-200 px-2 py-1 text-white">
                    {' '}
                    <PythonIcon className="mr-1 mt-1 h-5 w-5 " />
                    Python docs
                  </span>
                  <div
                    className="absolute left-1/2 m-4 mx-auto flex -translate-x-1/2 translate-y-full items-center whitespace-nowrap rounded-md 
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
