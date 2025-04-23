import Heading from '@/components/Heading'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Content, isFilled } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import { PrismicRichText } from '@/components/PrismicRichText'
import React from 'react'

/**
 *  Props for `HeroWithFigure`
 */

export type HeroWithFigureProps =
  SliceComponentProps<Content.HeroWithFigureSlice>

const HeroWithFigure = ({ slice }: HeroWithFigureProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex items-center px-4 py-2 md:px-6 md:py-4 lg:py-6 relative lg:h-[calc(100vh-128px)] lg:min-h-[750px]"
    >
      <div className="mx-auto w-full">
        <div className="relative mx-auto max-w-5xl">
          <div
            className={cn('flex flex-col lg:gap-x-8 lg:flex-row items-center', {
              'lg:flex-row-reverse': slice.primary.herofigurelocation,
            })}
          >
            {isFilled.link(slice.primary.herobuttonlink) ? (
              <PrismicNextLink
                field={slice.primary.herobuttonlink}
                className={cn(
                  'focus:outline-none focus:ring-2 focus:ring-ring focus-visible:ring-4 transition duration-300 ease-in-out hover:scale-105 rounded hover:-rotate-3',
                  { 'hover:rotate-3': slice.primary.herofigurelocation }
                )}
              >
                <PrismicNextImage
                  field={slice.primary.herofigure}
                  className="rounded"
                />
              </PrismicNextLink>
            ) : (
              <PrismicNextImage field={slice.primary.herofigure} />
            )}

            <div className="text-center md:text-left mx-auto">
              {isFilled.keyText(slice.primary.heroheading) && (
                <Heading as="h2" size="6xl">
                  {slice.primary.heroheading}
                </Heading>
              )}
              <div className="prose lg:prose-lg xl:prose-xl 2xl:prose-2xl py-4 lg:py-8">
                {isFilled.richText(slice.primary.herotext) && (
                  <PrismicRichText field={slice.primary.herotext} />
                )}
              </div>
              {isFilled.link(slice.primary.herobuttonlink) && (
                <Button
                  asChild
                  variant={slice.primary.herobuttonlink.variant || 'default'}
                  size={'lg'}
                >
                  <PrismicNextLink field={slice.primary.herobuttonlink}>
                    <span>{slice.primary.herobuttonlink.text}</span>
                  </PrismicNextLink>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroWithFigure
