import Head from 'next/head'
import { createClient } from '@/prismicio'
import Layout from '@/components/Layout'
import Pagination from '@/components/Pagination'
import BlogCard from '@/components/BlogCard'
import { Abril_Fatface } from 'next/font/google'
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] })

const BlogPages = ({ navigation, posts }) => {
  return (
    <Layout {...navigation}>
      <Head>
        <title>{`Blog Page ${posts.page} • JamieWhitmann.com`}</title>
        <>
          <meta
            name="description"
            content={`Jamie Whitmann's Blog Page ${posts.page}`}
          />
          <meta
            property="og:description"
            content={`Jamie Whitmann's Blog Page ${posts.page}`}
          />
        </>

        <meta
          property="og:url"
          content={`https://www.jamiewhitmann.com/blog/page/${posts.page}`}
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content={sitemetaimage.url} /> */}

        {/* <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:image" content={sitetwitterimage.url} /> */}
      </Head>
      <div>
        <h2 className="mx-auto my-8 max-w-md text-center text-3xl  md:text-4xl lg:text-5xl">
          Blog
        </h2>
        <hr className="border " />
        {posts.total_pages > 1 ? <Pagination {...posts} /> : null}
        {posts.results.length ? (
          <ul className="my-8 grid grid-cols-1 justify-items-center gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.results.map(post => {
              return <BlogCard key={post.id} {...post} font={abril} />
            })}
          </ul>
        ) : (
          <p>
            No Blog Posts Exist Yet. Please write publish one and then check
            back.
          </p>
        )}
      </div>
      {posts.total_pages > 1 ? <Pagination {...posts} /> : null}
    </Layout>
  )
}

export default BlogPages
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const pageNumber = Number(params.page)
  const navigation = await client.getSingle('main_navigation')
  if (isNaN(pageNumber)) {
    return {
      notFound: true,
    }
  }
  const posts = await client.getByType('post', {
    pageSize: 4,
    page: pageNumber,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  })
  if (pageNumber === 1) {
    return {
      redirect: {
        destination: '/blog/',
        permanent: false,
      },
    }
  }
  if (!posts.results.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
      navigation,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const posts = await client.getByType('post', {
    pageSize: 4,
  })
  if (posts.results.length < 6) {
    return {
      paths: posts.results.map((_, i) => `/blog/page/${i + 2}/`),
      fallback: 'blocking',
    }
  }
  return {
    paths: Array.from({ length: 5 }).map((_, i) => `/blog/page/${i + 2}/`),
    fallback: 'blocking',
  }
}
