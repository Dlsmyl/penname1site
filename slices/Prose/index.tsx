import { FC } from 'react'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Prose`.
 */
export type ProseProps = SliceComponentProps<Content.ProseSlice>

/**
 * Component for "Prose" Slices.
 */
const Prose: FC<ProseProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for Prose (variation: {slice.variation}) Slices
    </section>
  )
}

export default Prose
