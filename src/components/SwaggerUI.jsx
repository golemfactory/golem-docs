import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'
import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

const Swagger = dynamic(
  () => import('swagger-ui-react').then((mod) => mod.default),
  { ssr: false }
)

export function SwaggerUI({
  url,
  showInfo = false,
  overwrittenRequestURL: initialOverwrittenRequestURL = '',
}) {
  const [overwrittenRequestURL, setOverwrittenRequestURL] = useState(
    initialOverwrittenRequestURL || ''
  )
  const [isValidURL, setIsValidURL] = useState(true)
  const [swaggerKey, setSwaggerKey] = useState(0)

  useEffect(() => {
    validateURL(overwrittenRequestURL)
    console.log('overwrittenRequestURL updated:', overwrittenRequestURL)
    setSwaggerKey((prev) => prev + 1) // Force re-render of Swagger component
  }, [overwrittenRequestURL])

  const validateURL = (input) => {
    try {
      new URL(input)
      setIsValidURL(true)
    } catch {
      setIsValidURL(input === '')
    }
  }

  const determineClass = (showInfo) => {
    return showInfo ? '' : 'hide-info'
  }

  const className = determineClass(showInfo)

  const requestInterceptor = useCallback(
    (req) => {
      console.log('Interceptor called with URL:', req.url)
      console.log('Current overwrittenRequestURL:', overwrittenRequestURL)
      if (req.url !== url && overwrittenRequestURL && isValidURL) {
        const originalUrl = new URL(req.url)
        const newUrl = new URL(overwrittenRequestURL)
        newUrl.pathname = originalUrl.pathname
        newUrl.search = originalUrl.search
        req.url = newUrl.toString()
        console.log('URL modified to:', req.url)
      } else if (req.url !== url && !overwrittenRequestURL && initialOverwrittenRequestURL) {
        const originalUrl = new URL(req.url)
        const newUrl = new URL(initialOverwrittenRequestURL)
        newUrl.pathname = originalUrl.pathname
        newUrl.search = originalUrl.search
        req.url = newUrl.toString()
        console.log('URL modified to (using initial URL):', req.url)
      }
      return req
    },
    [url, overwrittenRequestURL, initialOverwrittenRequestURL, isValidURL]
  )

  const handleInputChange = (e) => {
    const newValue = e.target.value
    console.log('Input changed to:', newValue)
    setOverwrittenRequestURL(newValue)
  }

  return (
    <div className="space-y-4">
      {initialOverwrittenRequestURL && (
        <div>
          <label
            htmlFor="overwrittenRequestURL"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
          >
            SwaggerUI API Request URL
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              id="overwrittenRequestURL"
              name="overwrittenRequestURL"
              type="url"
              value={overwrittenRequestURL}
              onChange={handleInputChange}
              placeholder={`Enter API request URL (default: ${initialOverwrittenRequestURL})`}
              className={`block w-full rounded-md border-0 px-2 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ${
                isValidURL
                  ? 'ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                  : 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500'
              } dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:placeholder:text-slate-400 sm:text-sm sm:leading-6`}
              aria-invalid={!isValidURL}
              aria-describedby="url-error"
            />
            {!isValidURL && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          {!isValidURL && (
            <p
              className="mt-2 text-sm text-red-600 dark:text-red-400"
              id="url-error"
            >
              Please enter a valid URL (e.g., http://localhost:8000)
            </p>
          )}
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            The author has specified {initialOverwrittenRequestURL} as the
            default URL. If you're running the API on a different URL, you can
            modify it here. This URL will be used for API requests instead of
            the one specified in the OpenAPI spec. 
          </p>
        </div>
      )}
      <div className={`${className} not-prose`}>
        <Swagger
          key={swaggerKey}
          className="not-prose"
          url={url}
          requestInterceptor={requestInterceptor}
          configUrl={null}
        />
      </div>
    </div>
  )
}
