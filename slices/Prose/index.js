import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Prose = ({ slice }) => {
  const components = {
    paragraph: ({ node, children }) => <p className={`my-4 `}>{children}</p>,
  }
  return (
    <section className="prose md:prose-lg lg:prose-xl xl:prose-2xl mx-auto">
      <div className="font-abril mt-4 md:mt-6 lg:mt-8 xl:mt-10">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          ''
        )}
      </div>
      {slice.primary.prosecontent ? (
        <PrismicRichText
          components={components}
          field={slice.primary.prosecontent}
        />
      ) : (
        <p>No content added in CMS. Please add content!</p>
      )}
    </section>
  )
}

export default Prose
