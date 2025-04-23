import { createClient } from '@/prismicio'
import { ImageField, asText } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'

// import Pagination from '@/components/layout/Pagination'
import { PrismicRichText } from '@/components/PrismicRichText'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Heading from '@/components/Heading'
import { JSX } from 'react'
import { PostDocument } from '@/prismicio-types'
import Pagination from './layout/Pagination'

type ContentListProps = {
  contentType:
    | 'page'
    | 'book'
    | 'homepage'
    | 'main_navigation'
    | 'post'
    | 'series'
  page: number | undefined
  display: number | undefined
  ctaText?: string
  fallbackItemImage: ImageField
}

const ContentList = async ({
  contentType,
  ctaText = 'Read More',
  display = 5,
  fallbackItemImage,
  page = 1,
}: ContentListProps): Promise<JSX.Element> => {
  const client = createClient()
  let prismicData
  if (contentType === 'post') {
    prismicData = await client.getByType('post', {
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      },
      page: page,
      pageSize: display,
    })
  }

  return (
    <>
      <ul>
        {prismicData &&
          prismicData.results.length > 0 &&
          prismicData.results.map((item: PostDocument) => {
            return (
              <li
                key={item.id}
                className="grid lg:grid-cols-5 border-t border-t-secondary py-10 group"
              >
                <div className="flex justify-center items-center lg:-mr-4 lg:col-span-2">
                  <Link href={item.url || '#'}>
                    <PrismicNextImage
                      field={
                        item.data.meta_image
                          ? item.data.meta_image
                          : fallbackItemImage
                      }
                      className="rounded-lg"
                    />
                  </Link>
                </div>
                <Card className="lg:col-span-3 lg:-ml-4 bg-background/80 backdrop-blur ">
                  <CardHeader>
                    <PrismicRichText
                      field={item.data.title}
                      components={{
                        heading1: ({ children }) => (
                          <Heading as="h2" size="3xl">
                            {children}
                          </Heading>
                        ),
                      }}
                    />
                  </CardHeader>
                  <CardContent>
                    <PrismicRichText field={item.data.excerpt} />
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link
                        href={item.url || '#'}
                        aria-label={
                          `Read ${asText(item.data.title)}` ||
                          'View the content'
                        }
                      >
                        {ctaText}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </li>
            )
          })}
      </ul>
      {prismicData && prismicData.total_pages > 1 && (
        <Pagination
          hasNextPage={prismicData?.next_page !== null}
          hasPrevPage={prismicData?.prev_page !== null}
          totalPages={prismicData?.total_pages}
        />
      )}
    </>
  )
}

export default ContentList
