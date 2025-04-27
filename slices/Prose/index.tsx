import { FC } from 'react'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Section from '@/components/layout/Section'
import { PrismicRichText } from '@/components/PrismicRichText'

/**
 * Props for `Prose`.
 */
export type ProseProps = SliceComponentProps<Content.ProseSlice>

/**
 * Component for "Prose" Slices.
 */
const Prose: FC<ProseProps> = ({ slice }) => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      width="md"
      className="py-6 md:py-8 lg:py-12 prose lg:prose-lg xl:prose-xl mx-auto"
    >
      <PrismicRichText field={slice.primary.prosecontent} />
    </Section>
  )
}

export default Prose
