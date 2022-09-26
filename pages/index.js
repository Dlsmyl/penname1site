import { SliceZone } from '@prismicio/react'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
export default function Home({ page, navigation, settings }) {
  console.log(page)
  return (
    <>
      <Head>
        <title>Jamie Whitmann • Romance Author</title>
        <meta name="description" content={page.data.homepagemetadescription} />
        <meta
          property="og:description"
          content={page.data.homepagemetadescription}
        />
        <meta property="og:url" content="https://www.jamiewhitmann.com" />
        <meta property="og:type" content="website" />
        {page.data.homepagemetaimage && (
          <meta property="og:image" content={page.data.homepagemetaimage.url} />
        )}
        <meta property="twitter:card" content="summary" />
        {page.data.homepagemetaimage && (
          <meta
            property="twitter:image"
            content={page.data.homepagemetaimage.url}
          />
        )}
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <nav className="navbar bg-base-100 justify-center lg:justify-start">
          <a className="btn btn-ghost normal-case text-xl">Jamie Whitmann</a>
        </nav>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage')
  const navigation = await client.getSingle('main_navigation')

  return {
    props: {
      navigation,
      page,
    },
  }
}
