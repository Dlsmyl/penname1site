import ContentList from '@/components/ContentList'
import Section from '@/components/layout/Section'
import { Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { LoaderCircle } from 'lucide-react'
import { Suspense, FC } from 'react'

/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex: FC<ContentIndexProps> = ({ slice, context }) => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      width="lg"
    >
      <Suspense
        fallback={
          <div className="grid min-h-[calc(100vh-128px)] place-content-center">
            <LoaderCircle
              className="animate-spin text-primary"
              height={120}
              width={120}
            />
          </div>
        }
      >
        <ContentList
          contentType={slice.primary.content_type}
          display={slice.primary.number_to_display || undefined}
          page={Number(context) || 1}
          ctaText={
            isFilled.keyText(slice.primary.content_cta_text)
              ? slice.primary.content_cta_text
              : 'Read More'
          }
          fallbackItemImage={slice.primary.fallback_item_image}
        />
      </Suspense>
    </Section>
  )
}

export default ContentIndex
