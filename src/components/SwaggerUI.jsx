import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'

const Swagger = dynamic(
  () => import('swagger-ui-react').then((mod) => mod.default),
  { ssr: false }
)

export function SwaggerUI({ url, showInfo = false }) {
  // Function to determine the class name based on the showInfo prop
  const determineClass = (showInfo) => {
    return showInfo ? '' : 'hide-info'
  }

  const className = determineClass(showInfo)

  return (
    <div className={`${className} not-prose`}>
      <Swagger className="not-prose" url={url} />
    </div>
  )
}
