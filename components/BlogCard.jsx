import { asText } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'

const BlogCard = ({
  as: Comp = 'li',
  id,
  data,
  url,
  index,
  first_publication_date,
  font,
}) => {
  const datepublished = new Date(first_publication_date)
  return (
    <Comp
      key={id}
      className="flex max-w-md flex-col rounded-lg border border-gray-200 bg-white"
    >
      {data?.metaimage.url && (
        <Link href={url}>
          <PrismicNextImage
            field={data?.metaimage}
            className="rounded-t-lg"
            priority={index === 0}
          />
        </Link>
      )}

      <div className="flex h-full flex-col justify-between p-4">
        <div>
          <Link href={url}>
            <h3 className={` text-2xl text-center ${font.className}`}>
              {asText(data.title)}
            </h3>
            <p className="text-center my-2 text-xs">{`Published ${datepublished.toLocaleDateString(
              'en-US',
              {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              }
            )}`}</p>
          </Link>
        </div>
        <p className="prose mx-auto">
          {asText(data?.metadescription) || 'Add Metadescription in CMS'}
        </p>
        <Link href={url} className="inline-flex self-end btn btn-primary my-4">
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </Comp>
  )
}

export default BlogCard
