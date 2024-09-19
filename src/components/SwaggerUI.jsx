import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'

const Swagger = dynamic(
  () => import('swagger-ui-react').then((mod) => mod.default),
  { ssr: false }
)

export function SwaggerUI({ url, showInfo = false, overwrittenRequestURL }) {
  // Function to determine the class name based on the showInfo prop
  const determineClass = (showInfo) => {
    return showInfo ? '' : 'hide-info'
  }

  const className = determineClass(showInfo)

  // Create a requestInterceptor function if overwrittenRequestURL is provided
  const requestInterceptor = overwrittenRequestURL
    ? (req) => {
        // Only modify the URL if it's not the spec URL
        if (req.url !== url) {
          const originalUrl = new URL(req.url)
          const newUrl = new URL(overwrittenRequestURL)

          // Preserve the path and query parameters from the original URL
          newUrl.pathname = originalUrl.pathname
          newUrl.search = originalUrl.search

          req.url = newUrl.toString()
        }
        return req
      }
    : undefined

  return (
    <div className={`${className} not-prose`}>
      <Swagger
        className="not-prose"
        url={url}
        requestInterceptor={requestInterceptor}
      />
    </div>
  )
}
