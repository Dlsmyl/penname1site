import { SliceZone } from '@prismicio/react'
import Image from 'next/future/image'
import { createClient } from '../prismicio'
import { components } from '../slices'
export default function Home({ page, navigation, settings }) {
  return (
    <>
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
