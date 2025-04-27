import { FC } from 'react'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import NewsletterForm from '@/components/NewsletterForm'
import Section from '@/components/layout/Section'
import { cn } from '@/lib/utils'
import { PrismicRichText } from '@/components/PrismicRichText'

/**
 * Props for `NewsletterSignUp`.
 */
export type NewsletterSignUpProps =
  SliceComponentProps<Content.MailerLiteSignUpSlice>

/**
 * Component for "NewsletterSignUp" Slices.
 */
const NewsletterSignUp: FC<NewsletterSignUpProps> = ({ slice }) => {
  const groupIds = slice.items.map((item) => item.mailerlitegroupid)
  return (
    <Section
      width="lg"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 md:gap-x-4 lg:grid-cols-2">
        <div
          className={cn('prose lg:prose-lg xl:prose-xl mx-auto', {
            'order-last': !slice.primary.formlocation,
          })}
        >
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.description} />
        </div>
        <NewsletterForm {...slice.primary} groupIds={groupIds} />
      </div>
    </Section>
  )
}

export default NewsletterSignUp
