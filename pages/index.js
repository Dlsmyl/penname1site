import * as React from 'react'
import { SliceZone } from '@prismicio/react'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout/Layout'
export default function Home({ page, navigation, settings }) {
  let sliceTypes = []
  page.data.slices.forEach(slice => sliceTypes.push(slice.slice_type))
  if (sliceTypes[0] === 'hero_with_figure') {
    page.data.slices[0].lcp = true
  }
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
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  )
}
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage', {
    fetchLinks: [
      'series.seriesname',
      'series.boxsetlink',
      'series.seriesimage',
    ],
  })
  const navigation = await client.getSingle('main_navigation')

  return {
    props: {
      navigation,
      page,
    },
  }
}
