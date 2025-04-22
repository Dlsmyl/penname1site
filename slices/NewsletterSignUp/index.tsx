import { FC } from 'react'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `NewsletterSignUp`.
 */
export type NewsletterSignUpProps =
  SliceComponentProps<Content.MailerLiteSignUpSlice>

/**
 * Component for "NewsletterSignUp" Slices.
 */
const NewsletterSignUp: FC<NewsletterSignUpProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for NewsletterSignUp (variation: {slice.variation})
      Slices
    </section>
  )
}

export default NewsletterSignUp
