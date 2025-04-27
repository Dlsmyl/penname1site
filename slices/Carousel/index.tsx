import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import React from 'react'

/**
 *  Props for `Carousel`
 */

export type CarouselProps = SliceComponentProps<Content.CarouselSlice>

const Carousel = ({ slice }: CarouselProps) => {
  // define HTML serializer

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder for the Carousel slice.
    </section>
  )
}

export default Carousel
