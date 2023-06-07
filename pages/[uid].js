import * as React from 'react'
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout/Layout'
import { Abril_Fatface } from 'next/font/google'
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] })

const Page = ({ page, navigation, settings }) => {
  const router = useRouter()

  return (
    <Layout {...navigation}>
      <Head>
        <title>{`${page.data.pagetitle} • JamieWhitmann.com`}</title>
        <link
          rel="canonical"
          href={`https://www.jamiewhitmann.com${router.asPath}`}
        />
        <meta
          name="description"
          content={
            page.data.pagemetadescription ||
            'Jamie Whitmann is a romance author who enjoys writing clean romantic short stories.'
          }
        />
        <meta
          property="og:description"
          content={
            page.data.pagemetadescription ||
            'Jamie Whitmann is a romance author who enjoys writing clean romantic short stories.'
          }
        />
        <meta property="og:url" content="https://www.jamiewhitmann.com" />
        <meta property="og:type" content="website" />
        {page.data.pagemetaimage && (
          <meta property="og:image" content={page.data.pagemetaimage.url} />
        )}
        <meta property="twitter:card" content="summary" />
        {page.data.pagemetaimage && (
          <meta
            property="twitter:image"
            content={page.data.pagemetaimage.url}
          />
        )}
      </Head>
      <h1
        className={`mx-auto px-4 md:px-0 text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-4 md:my-6 lg:my-8 xl:my-10 text-center ${abril.className}`}
      >
        {page.data.pagetitle}
      </h1>
      <div className="min-h-[3px] rounded bg-gradient-to-r from-transparent via-primary to-transparent mb-2 md:mb-4 lg:mb-6 xl:mb-8" />
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', params.uid)
  const navigation = await client.getSingle('main_navigation')
  return {
    props: {
      navigation,
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')
  return {
    paths: pages.map(page => prismicH.asLink(page)),
    fallback: 'blocking', // remove when Netlify's NextJS Runtime is fixed
  }
}
