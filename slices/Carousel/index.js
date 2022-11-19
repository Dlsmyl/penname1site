import React from 'react'
import Image from 'next/image'
import PrismicNextLink from '../../components/PrismicNextLink'

const Carousel = ({ slice }) => {
  return (
    <section className="py-4 md:py-6 lg:py-8 xl:py-10">
      <div className="carousel w-[260px]  space-x-4 mx-auto shadow-lg">
        {slice?.items?.map((item, i) => {
          return (
            <div
              id={`item${i}`}
              key={slice.id + i}
              className="carousel-item w-full"
            >
              <PrismicNextLink field={item.carouselimagelink}>
                <Image
                  src={item.carouselimage.url}
                  alt={item.carouselimage.alt || ''}
                  width={260}
                  height={400}
                />
              </PrismicNextLink>
            </div>
          )
        })}
      </div>
      <div className="mt-4 flex justify-center w-full py-2 gap-4">
        {slice?.items?.map((item, i) => {
          return (
            <a
              href={`#item${i}`}
              key={slice.id + 'button' + i}
              className="flex justify-center items-center w-6 h-6 bg-primary rounded-full"
            >
              {i + 1}
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Carousel
