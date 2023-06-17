import * as React from 'react'
import { SliceZone } from '@prismicio/react'
import { asLink } from '@prismicio/client'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout'
import Pagination from '@/components/Pagination'
import BlogCard from '@/components/BlogCard'
import { Abril_Fatface } from 'next/font/google'
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] })

const Page = ({ navigation, page, posts, settings }) => {
  if (page.url !== '/blog') {
    return (
      <Layout {...navigation}>
        <Head>
          <title>{`${page?.data?.pagetitle} • JamieWhitmann.com`}</title>
          <link
            rel="canonical"
            href={`https://www.jamiewhitmann.com${page?.url}`}
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
          className={`mx-auto px-4 md:px-0 text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-4 md:my-6 lg:my-8 xl:my-12 text-center ${abril.className}`}
        >
          {page.data.pagetitle}
        </h1>
        <div className="min-h-[3px] rounded bg-gradient-to-r from-transparent via-primary to-transparent mb-2 md:mb-4 lg:mb-6 xl:mb-8" />
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    )
  }
  return (
    <Layout {...navigation}>
      <Head>
        <title>{`Blog • JamieWhitmann.com`}</title>
        <link rel="canonical" href={`https://www.jamiewhitmann.com/blog`} />
        <>
          <meta
            name="description"
            content={`Check out the most recent posts from Jamie's Blog`}
          />
          <meta
            property="og:description"
            content={`Check out the most recent posts from Jamie's Blog`}
          />
        </>

        <meta
          property="og:url"
          content={`https://www.jamiewhitmann.com/blog`}
        />
        <meta property="og:type" content="website" />
        {page?.data?.pagemetaimage && (
          <meta property="og:image" content={page?.data?.pagemetaimage?.url} />
        )}

        <meta property="twitter:card" content="summary_large_image" />

        {page?.data?.pagemetaimage && (
          <meta
            property="twitter:image"
            content={page?.data?.pagemetaimage?.url}
          />
        )}
      </Head>
      <div>
        <h1
          className={`mx-auto my-4 md:my-6 lg:my-8 xl:my-12 py-8 max-w-md text-center text-3xl md:text-4xl lg:text-5xl ${abril.className}`}
        >
          {page?.data?.pagetitle}
        </h1>
        <hr className="border" />
        {posts.total_pages > 1 ? <Pagination {...posts} /> : null}
        {posts.results.length ? (
          <ul className="my-8 grid grid-cols-1 justify-items-center gap-8 px-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {posts.results.map((post, i) => {
              return (
                <BlogCard
                  as="li"
                  key={post.id}
                  {...post}
                  font={abril}
                  index={i}
                />
              )
            })}
          </ul>
        ) : (
          <>
            <p className="prose md:prose-lg lg:prose-xl xl:prose-2xl mx-auto my-12">
              Jamie is currently working on her first post ever. Only a few of
              you will have seen this. Lucky you!
            </p>
            <p className="prose md:prose-lg lg:prose-xl xl:prose-2xl mx-auto my-12">
              While you wait, why not{' '}
              <a href="https://amazon.com/author/jamiewhitmann">
                follow her on Amazon
              </a>
              ?
            </p>
          </>
        )}
      </div>
      {posts.total_pages > 1 ? <Pagination {...posts} /> : null}
    </Layout>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', params.uid, {
    fetchLinks: [`series`],
  })
  const navigation = await client.getSingle('main_navigation')

  let posts
  if (page.uid === 'blog') {
    posts = await client.getByType('post', {
      pageSize: 4,
      page: 1,
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      },
    })
    // if (!posts.results.length) {
    //   return {
    //     notFound: true,
    //   }
    // }
    return {
      props: {
        page,
        navigation,
        posts,
      },
    }
  }

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
    paths: pages.map(page => asLink(page)),
    fallback: 'blocking', // remove when Netlify's NextJS Runtime is fixed
  }
}
