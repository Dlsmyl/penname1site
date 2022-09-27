import '../styles/globals.css'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }) {
  console.log(pageProps)
  const { navigation } = pageProps
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Layout {...navigation}>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const navigation = await client.getSingle('main_navigation')

  return {
    props: {
      navigation,
    },
  }
}
