import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

const SeriesHero = ({ slice }) => {
  const components = {
    heading2: ({ node, children }) => (
      <h2
        className={`my-4 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-abril`}
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
    <section className="max-w-screen-lg mx-auto">
      <PrismicRichText field={slice.primary.title} components={components} />
      <PrismicRichText field={slice.primary.subtitle} components={components} />
      <hr />
      <div className=" grid grid-flow-row md:grid-flow-col md:auto-col-auto place-items-center">
        {slice?.items?.map((item, i) => (
          <div key={item.series.id} className="my-4">
            <PrismicLink field={item.series.data.boxsetlink}>
              <PrismicNextImage
                field={item.series.data.seriesimage}
                imgixParams={{ h: 270, w: 270 }}
              />
              <p className="text-center text-xl md:text-2xl font-abril">
                {item.series.data.seriesname}
              </p>
            </PrismicLink>
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
