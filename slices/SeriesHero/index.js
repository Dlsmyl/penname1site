import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import PrismicNextLink from '../../components/PrismicNextLink'
import { PrismicNextImage } from '@prismicio/next'
import { Abril_Fatface } from "next/font/google"
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] })

const SeriesHero = ({ slice }) => {
  const components = {
    heading2: ({ node, children }) => (
      <h2
        className={`my-4 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${abril.className}`}
      >
        {children}
      </h2>
    ),
    heading3: ({ node, children }) => (
      <h2
        className={`my-4 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-semilbold text-accent-content`}
      >
        {children}
      </h2>
    ),
    paragraph: ({ node, children }) => <p className={`px-4`}>{children}</p>,
  }
  return (
    <section className="w-full mx-auto">
      <PrismicRichText field={slice.primary.title} components={components} />
      <PrismicRichText field={slice.primary.subtitle} components={components} />
      <hr />
      <div className={`flex justify-center flex-wrap space-x-4`}>
        {slice?.items?.map((item, i) => (
          <div key={item.series.id} className="my-4 flex-0">
            <PrismicNextLink field={item.series.data.boxsetlink}>
              <PrismicNextImage
                field={item.series.data.seriesimage}
                imgixParams={{ h: 270, w: 270 }}
              />
              <p
                className={`text-center text-xl md:text-2xl ${abril.className}`}
              >
                {item.series.data.seriesname}
              </p>
            </PrismicNextLink>
          </div>
        ))}
      </div>
      <div className="my-4 md:my-6 lg:my-8 xl:my-10 prose prose-lg mx-auto">
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
      </div>
    </section>
  )
}

export default SeriesHero
