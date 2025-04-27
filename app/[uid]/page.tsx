import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { asImageSrc } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'
import Heading from '@/components/Heading'

type Params = { uid: string }

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<Params>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { uid } = await params
  const client = createClient()
  const page = await client.getByUID('page', uid).catch(() => notFound())
  const pageNumber = (await searchParams).page

  return (
    <>
      <Heading as="h1" size="6xl" className="lg:text-center">
        {page.data.pagetitle}
      </Heading>

      <SliceZone
        slices={page.data.slices}
        components={components}
        context={pageNumber}
      />
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { uid } = await params
  const client = createClient()
  const page = await client.getByUID('page', uid).catch(() => notFound())
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
  const pages = await client.getAllByType('page')

  return pages.map((page) => ({ uid: page.uid }))
}
