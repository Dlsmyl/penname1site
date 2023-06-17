import Head from 'next/head'
import { SliceZone, PrismicRichText } from '@prismicio/react'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import Layout from '@/components/Layout'
import { asLink, asText } from '@prismicio/client'

const Post = ({ post, navigation }) => {
  return (
    <Layout {...navigation}>
      <Head>
        <title>{`${asText(post?.data?.title)} • JamieWhitmann.com`}</title>
        <link
          rel="canonical"
          href={`https://www.jamiewhitmann.com${post?.url}`}
        />
        <>
          <meta
            name="description"
            content={
              post.metadescription ||
              `Check out the most recent posts from Jamie's Blog`
            }
          />
          <meta
            property="og:description"
            content={
              post.metadescription ||
              `Check out the most recent posts from Jamie's Blog`
            }
          />
        </>

        <meta
          property="og:url"
          content={`https://www.jamiewhitmann.com${post?.url}`}
        />
        <meta property="og:type" content="website" />
        {post?.data?.metaimage && (
          <meta property="og:image" content={post?.data?.metaimage?.url} />
        )}
        {post?.data?.metatitle && (
          <meta property="og:title" content={post?.data?.metatitle} />
        )}

        <meta property="twitter:card" content="summary_large_image" />

        {post?.data?.metaimage && (
          <meta property="twitter:image" content={post?.data?.metaimage?.url} />
        )}
      </Head>
      <PrismicRichText field={post?.data?.title} />
      {post.data?.slices?.length > 0 && (
        <SliceZone slices={post.data.slices} components={components} />
      )}
    </Layout>
  )
}
export default Post

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const post = await client.getByUID('post', params.uid, {
    graphQuery: `{
      post {
        title
        metaimage
        metadescription
        metatitle
        slices {
          ...on series_hero {
            variation {
              ...on default {
                primary {
                  ...primaryFields
                }
                items {
                  series {
                    ...seriesFields
                  }
                }
              }
            }
          }
          ... on carousel {
            variation {
              ...on default {
                primary {
                  ...primaryFields
                }
                items {
                  ...itemsFields
                }
              }
            }
          }
          ... on prose {
            variation {
              ...on default {
                primary {
                  ...primaryFields
                }
              }
            }
          }
          ... on hero_with_figure {
            variation {
              ...on default {
                primary {
                  ...primaryFields
                }
              }
              ...on heroWithFigureGradient {
                primary {
                  ...primaryFields
                }
              }
              ...on heroWithBackgroundImage {
                primary {
                  ...primaryFields
                }
              }
            }
          }
          ... on mailer_lite_sign_up {
            variation {
              ...on default {
                primary {
                  ...primaryFields
                }
              }
            }
          }
        }
      }
    }`,
  })
  const navigation = await client.getSingle('main_navigation')

  return {
    props: {
      navigation,
      post,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const posts = await client.getAllByType('post')

  return {
    paths: posts.map(post => asLink(post)),
    fallback: false,
  }
}
