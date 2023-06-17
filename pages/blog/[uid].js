import Head from 'next/head'
import { SliceZone, PrismicRichText } from '@prismicio/react'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import Layout from '@/components/Layout'
import { asLink } from '@prismicio/client'

const Post = ({ post, navigation }) => {
  console.log('/pages/blog/[uid].js -> ', post)
  return (
    <Layout {...navigation}>
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
