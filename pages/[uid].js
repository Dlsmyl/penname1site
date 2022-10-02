import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout/Layout'

const Page = ({ page, navigation, settings }) => {
  return (
    <Layout {...navigation}>
      <h1 className="prose md:prose-lg lg:prose-xl xl:prose-2xl mx-auto px-4 md:px-0 font-abril text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-4 md:my-6 lg:my-8 xl:my-10">
        {page.data.pagetitle}
      </h1>
      <div className="min-h-[3px] rounded bg-gradient-to-r from-transparent via-accent to-transparent mb-2 md:mb-4 lg:mb-6 xl:mb-8" />
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
    fallback: false,
  }
}
