import Head from 'next/head'
import Link from 'next/link'

export default function DocsHome() {
  return (
    <div className="container">
      <Head>
        <title>Documentation Home</title>
        <meta name="description" content="Documentation home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Documentation</h1>
        <p>This is the home page for our documentation.</p>
        <Link href="/en/docs/ja/getting-started">
          <a>Get Started</a>
        </Link>
      </main>

      <footer>
        <p>© 2023 Your Company Name</p>
      </footer>
    </div>
  )
}
