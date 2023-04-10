import { PrismicRichText } from '@prismicio/react'
import { Abril_Fatface } from "next/font/google"
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] })
const Prose = ({ slice }) => {
  const components = {
    heading1: ({ node, children }) => (
      <h1 className={`my-4 ${abril.className}`}>{children}</h1>
    ),
    heading2: ({ node, children }) => (
      <h2 className={`my-4 ${abril.className}`}>{children}</h2>
    ),
    heading3: ({ node, children }) => (
      <h3 className={`my-4  ${abril.className}`}>{children}</h3>
    ),
    heading4: ({ node, children }) => (
      <h4 className={`my-4  ${abril.className}`}>{children}</h4>
    ),
    paragraph: ({ node, children }) => <p className={`my-4 `}>{children}</p>,
  }
  return (
    <section className="prose md:prose-lg lg:prose-xl xl:prose-2xl mx-auto px-4 md:px-0 my-4 md:my-6 lg:my-8 xl:my-10">
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
