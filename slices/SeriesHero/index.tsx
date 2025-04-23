import { FC } from 'react'
import { Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Section from '@/components/layout/Section'
import { PrismicRichText } from '@/components/PrismicRichText'
import Heading from '@/components/Heading'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { SeriesDocument } from '@/prismicio-types'

/**
 * Props for `SeriesHero`.
 */
export type SeriesHeroProps = SliceComponentProps<Content.SeriesHeroSlice>

/**
 * Component for "SeriesHero" Slices.
 */
const SeriesHero: FC<SeriesHeroProps> = ({ slice }) => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      width="lg"
    >
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading2: ({ children }) => (
            <Heading size="6xl" as="h2" className="lg:text-center">
              {children}
            </Heading>
          ),
        }}
      />
      <PrismicRichText
        field={slice.primary.subtitle}
        components={{
          heading3: ({ children }) => (
            <Heading
              size="3xl"
              as="h3"
              className="lg:text-center font-sans font-light"
            >
              {children}
            </Heading>
          ),
        }}
      />
      <div className={`flex justify-center flex-wrap gap-x-4`}>
        {slice.primary.series.map((item, i) => {
          const { series } = item
          const seriesItem = series as unknown as SeriesDocument
          return (
            <div key={i} className="my-4">
              <PrismicNextLink field={item.series_link}>
                <PrismicNextImage
                  field={seriesItem.data.seriesimage}
                  imgixParams={{ h: 270, w: 270 }}
                  className={`w-[270px]`}
                />
                <p className={`text-center text-xl`}>
                  {seriesItem.data.seriesname}
                </p>
              </PrismicNextLink>
            </div>
          )
        })}
      </div>
      {isFilled.richText(slice.primary.description) && (
        <div className="my-4 md:my-6 lg:my-8 xl:my-10 prose prose-lg mx-auto">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
    </Section>
  )
}

export default SeriesHero
