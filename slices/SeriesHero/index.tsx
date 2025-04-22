import { FC } from 'react'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `SeriesHero`.
 */
export type SeriesHeroProps = SliceComponentProps<Content.SeriesHeroSlice>

/**
 * Component for "SeriesHero" Slices.
 */
const SeriesHero: FC<SeriesHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for SeriesHero (variation: {slice.variation}) Slices
    </section>
  )
}

export default SeriesHero
