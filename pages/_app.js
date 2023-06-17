import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import { PrismicProvider } from '@prismicio/react'
import {
  PrismicPreview,
  PrismicNextImage,
  PrismicNextLink,
} from '@prismicio/next'
import { repositoryName } from '../prismicio'
import { getCookie } from 'cookies-next'

export default function App({ Component, pageProps }) {
  const consent = getCookie(`localConsent`)
  const richTextComponents = {
    // see global.js temporarily to modify these styles. Working on DRY.

    heading1: ({ children, node }) => (
      <h1
        className={`${roboto.className} ${
          node?.spans[0]?.data?.label === 'color-secondary'
            ? `text-brand-secondary`
            : ``
        }`}
      >
        {children}
      </h1>
    ),
    heading2: ({ children, node }) => {
      return (
        <h2
          className={`${roboto.className} ${
            node?.spans[0]?.data?.label === 'color-secondary'
              ? `text-brand-secondary`
              : ``
          }`}
        >
          {children}
        </h2>
      )
    },
    heading3: ({ children, node }) => (
      <h3
        className={`${roboto.className} ${
          node?.spans[0]?.data?.label === 'color-secondary'
            ? `text-brand-secondary`
            : ``
        }`}
      >
        {children}
      </h3>
    ),
    heading4: ({ children, node }) => (
      <h4
        className={`${roboto.className} ${
          node?.spans[0]?.data?.label === 'color-secondary'
            ? `text-brand-secondary`
            : ``
        }`}
      >
        {children}
      </h4>
    ),
    heading5: ({ children, node }) => (
      <h5
        className={`${roboto.className} ${
          node?.spans[0]?.data?.label === 'color-secondary'
            ? `text-brand-secondary`
            : ``
        }`}
      >
        {children}
      </h5>
    ),
    heading6: ({ children, node }) => (
      <h6
        className={`${roboto.className} ${
          node?.spans[0]?.data?.label === 'color-secondary'
            ? `text-brand-secondary`
            : ``
        }`}
      >
        {children}
      </h6>
    ),
    paragraph: ({ children }) => <p>{children}</p>,
    oList: ({ children }) => (
      <ol className="commonTextMargins commonTextStyles listStyles">
        {children}
      </ol>
    ),
    oListItem: ({ children }) => (
      <li className="commonTextMargins commonTextStyles listItemStyles">
        {children}
      </li>
    ),
    list: ({ children }) => (
      <ul className="commonTextMargins commonTextStyles listStyles">
        {children}
      </ul>
    ),
    listItem: ({ children }) => (
      <li className="commonTextMargins commonTextStyles listItemStyles">
        {children}
      </li>
    ),
    preformatted: ({ children }) => (
      <pre className="commonTextMargins preFormattedStyles">
        <code>{children}</code>
      </pre>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicNextLink field={node.data} className="linkStyles">
        {children}
      </PrismicNextLink>
    ),
    embed: ({ node, children }) => {
      return (
        <div className="mx-auto max-w-screen-sm overflow-hidden rounded shadow-xl">
          <div
            className="aspect-h-9 aspect-w-16"
            dangerouslySetInnerHTML={{ __html: node.oembed.html }}
          />
        </div>
      )
    },
    image: ({ node }) => {
      return (
        <div className="not-prose my-4 flex justify-center">
          {node?.linkTo?.link_type === undefined ? (
            <a href={node.url} target="_blank" rel="noreferrer">
              <PrismicNextImage
                field={node}
                className="rounded-lg transition duration-300 ease-in-out hover:shadow hover:shadow-brand-accent"
              />
            </a>
          ) : (
            <div className="not-prose my-4 flex justify-center">
              <PrismicNextLink field={node?.linkTo} rel="noreferrer">
                <PrismicNextImage
                  field={node}
                  className="rounded-lg transition duration-300 ease-in-out hover:shadow hover:shadow-brand-accent"
                />
              </PrismicNextLink>
            </div>
          )}
        </div>
      )
    },
  }
  return (
    <PrismicProvider
      internalLinkComponent={props => <Link {...props} />}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Head>
          <link
            rel="preconnect"
            href="https://images.prismic.io"
            crossOrigin="true"
          />
          <link rel="dns-prefetch" href="https://images.prismic.io" />

          <link
            rel="preconnect"
            href="https://prismic-io.s3.amazonaws.com"
            crossOrigin="true"
          />
          <link rel="dns-prefetch" href="https://prismic-io.s3.amazonaws.com" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied' });(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NX9ZBZ3');`}
        </Script>
        {consent === true && (
          <Script
            id="consupd"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
            }}
          />
        )}
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
