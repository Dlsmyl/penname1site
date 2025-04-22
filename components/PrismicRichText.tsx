import {
  PrismicRichText as BasePrismicRichText,
  JSXMapSerializer,
  PrismicRichTextProps as BasePrismicRichTextProps,
} from '@prismicio/react'
import * as prismic from '@prismicio/client'
import Heading from '@/components/Heading' // Ensure this path is correct
import * as React from 'react'
// Removed unused imports (Image, Link) unless needed elsewhere in the file
import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Your defaultComponents looks good. JSXMapSerializer is a valid type here.
const defaultComponents: JSXMapSerializer = {
  heading1: ({ children }: { children: ReactNode }) => {
    return (
      <Heading as="h1" size="6xl">
        {children}
      </Heading>
    )
  },
  heading2: ({ children }: { children: ReactNode }) => {
    return (
      <Heading as="h2" size="5xl">
        {children}
      </Heading>
    )
  },
  heading3: ({ children }: { children: ReactNode }) => {
    return (
      <Heading as="h3" size="4xl">
        {children}
      </Heading>
    )
  },
  heading4: ({ children }: { children: ReactNode }) => {
    return (
      <Heading as="h4" size="3xl">
        {children}
      </Heading>
    )
  },
  heading5: ({ children }: { children: ReactNode }) => {
    return (
      <Heading as="h5" size="2xl">
        {children}
      </Heading>
    )
  },
  heading6: ({ children }: { children: ReactNode }) => {
    return (
      <Heading as="h6" size="xl">
        {children}
      </Heading>
    )
  },
  paragraph: ({ children }: { children: ReactNode }) => {
    return (
      <p className="mx-auto my-4 self-start text-inherit lg:my-6">{children}</p>
    )
  },
  embed: ({ node }) => {
    return (
      <div className="mx-auto max-w-(--breakpoint-sm) overflow-hidden rounded shadow-xl">
        <div
          className="aspect-h-9 aspect-w-16"
          dangerouslySetInnerHTML={{ __html: node.oembed.html || '' }}
        />
      </div>
    )
  },
  image: ({ node }) => {
    if (node.linkTo) {
      return (
        <div className="flex justify-center">
          <Link href={node.linkTo.url || '#'} target="_blank">
            <Image
              src={node.url}
              alt={node.alt || ''}
              width={node.dimensions.width}
              height={node.dimensions.height}
              className="my-4 rounded-lg shadow-sm md:my-6 lg:my-8 xl:my-10"
              title={node.alt || ''}
            />
          </Link>
        </div>
      )
    } else {
      return (
        <div className="flex justify-center">
          <Link href={node.url} target="_blank">
            <Image
              src={node.url}
              alt={node.alt || ''}
              width={node.dimensions.width}
              height={node.dimensions.height}
              className="my-4 rounded-lg shadow-sm md:my-6 lg:my-8 xl:my-10"
              title={node.alt || ''}
            />
          </Link>
        </div>
      )
    }
  },
  list: ({ children }: { children: ReactNode }) => {
    return <ul className="mx-auto list-disc">{children}</ul>
  },
  listItem: ({ children }: { children: ReactNode }) => {
    return <li className="ml-4 md:ml-6 lg:ml-8 xl:ml-10">{children}</li>
  },
  // Add other defaults like lists, links, images if needed
}

// Define PrismicRichTextProps using the official PrismicRichTextComponents type
// Use Omit for clarity: extend the base props but specifically replace 'components' and 'linkResolver'
interface PrismicRichTextProps<
  LinkResolverFunction extends
    prismic.LinkResolverFunction = prismic.LinkResolverFunction,
> extends Omit<BasePrismicRichTextProps, 'components' | 'linkResolver'> {
  // Omit the base versions
  // Use the official type for the components prop *passed into* your wrapper
  components?: JSXMapSerializer // <--- Use the imported type here
  // Re-add linkResolver using your generic type
  linkResolver?: LinkResolverFunction
  // Add other custom props specific to your wrapper here, if any
}

// Your wrapper component
export const PrismicRichText = function PrismicRichText<
  LinkResolverFunction extends prismic.LinkResolverFunction<
    string | null
  > = prismic.LinkResolverFunction<string | null>,
>({ components, ...props }: PrismicRichTextProps<LinkResolverFunction>) {
  return (
    <BasePrismicRichText
      // Merge defaults with overrides. The result is compatible with the
      // base component's expected 'components' prop type.
      components={{ ...defaultComponents, ...components }}
      // Pass through other props (like 'field', 'fallback', and your generic 'linkResolver')
      {...props}
    />
  )
}
