import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { asImageSrc } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'
import Section from '@/components/layout/Section'

type Params = { uid: string }

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params
  const client = createClient()
  const page = await client.getByUID('post', uid).catch(() => notFound())

  return (
    <Section width="md">
      <SliceZone slices={page.data.slices} components={components} />
      <span className="text-right block font-heading text-xl lg:text-2xl font-bold mr-8 lg:mr-16">
        &mdash; Jamie
      </span>
    </Section>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { uid } = await params
  const client = createClient()
  const page = await client.getByUID('post', uid).catch(() => notFound())

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? '' }],
    },
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType('post')

  return pages.map((page) => ({ uid: page.uid }))
}
