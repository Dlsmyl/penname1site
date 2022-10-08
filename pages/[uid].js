import * as React from 'react'
import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout/Layout'

const Page = ({ page, navigation, settings }) => {
  let sliceTypes = []
  page.data.slices.forEach(slice => sliceTypes.push(slice.slice_type))
  const formOnPage = sliceTypes.indexOf('mailer_lite_sign_up') > 0
  React.useEffect(() => {
    if (formOnPage) {
      const recaptchaScript = document.createElement('script')
      recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=6LdegF8iAAAAADDOMwVAXSvPRZwr2GC_O_5cxNgs`
      recaptchaScript.async = true
      document.head.appendChild(recaptchaScript)
      return () => {
        // Get all script tags: returns HTMLcollection
        const scripts = document.getElementsByTagName('script')
        // Loop through the HTMLcollection (array-like but not array)
        for (var i = 0; i < scripts.length; i++) {
          // find script whose src value includes "recaptcha/releases"
          // this script is added when main recaptcha script is loaded

          if (
            scripts.item(i).attributes.getNamedItem('src') &&
            scripts
              .item(i)
              .attributes.getNamedItem('src')
              .value.includes('recaptcha/releases')
          ) {
            document.head.removeChild(scripts.item(i)) // remove script from head
          }
        }
        document.head.removeChild(recaptchaScript) // remove main recaptcha script from head
        // remove the recaptcha badge from the bottom right corner
        let badge = document.querySelector('.grecaptcha-badge')
        if (badge) {
          badge.parentElement.remove()
        }
      }
    }
  }, [formOnPage])

  return (
    <Layout {...navigation}>
      <Head>
        <title>{page.data.pagetitle} • JamieWhitmann.com</title>
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
      <h1 className="prose md:prose-lg lg:prose-xl xl:prose-2xl mx-auto px-4 md:px-0 font-abril text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-4 md:my-6 lg:my-8 xl:my-10 text-center">
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
