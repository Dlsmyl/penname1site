import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import Link from 'next/link'
import { PrismicNextImage } from '@prismicio/next'

const HeroWithFigure = ({ slice }) => {
  // define HTML serializer
  const components = {
    paragraph: ({ node, children }) => (
      <p
        className={`my-4 text-left ${
          variation === 'heroWithBackgroundImage' ? ` text-white` : ``
        }`}
      >
        {children}
      </p>
    ),
  }
  const {
    primary: {
      herofigure,
      herofigurelocation,
      heroheading,
      herotext,
      herobackgroundcolor,
      herobuttonlink,
      herobuttontext,
      herobackgroundimage,
    },
    variation,
  } = slice
  let bgStyle
  if (variation === 'heroWithFigureGradient') {
    const {
      primary: { herobackgroundcolorstart, herobackgroundcolorend },
    } = slice
    bgStyle = {
      background: `linear-gradient(${herobackgroundcolorstart}, ${herobackgroundcolorend})`,
    }
  } else if (variation === 'heroWithBackgroundImage') {
    bgStyle = {
      background: `url('${herobackgroundimage.url}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  } else {
    bgStyle = {
      background: herobackgroundcolor ? herobackgroundcolor : '#F9FAFB',
    }
  }

  return (
    <section className={`hero relative md:min-h-screen`} style={bgStyle}>
      {variation === 'heroWithBackgroundImage' ? (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
      ) : null}
      <div
        className={`hero-content flex-col lg:space-x-8 ${
          herofigurelocation ? `lg:flex-row-reverse` : `lg:flex-row`
        }`}
      >
        {herobuttonlink ? (
          <Link href={herobuttonlink.url}>
            <a
              className={`transition duration-300 ease-in-out hover:scale-105 ${
                herofigurelocation ? `hover:rotate-3` : `hover:-rotate-3`
              } shrink-0`}
            >
              <PrismicNextImage
                field={herofigure}
                imgixParams={{ h: 360, w: 250 }}
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </a>
          </Link>
        ) : (
          <PrismicNextImage
            field={herofigure}
            alt={herofigure.alt || ''}
            className={`max-w-sm rounded-lg shadow-2xl transition duration-300 ease-in-out hover:scale-105 ${
              herofigurelocation ? `hover:rotate-3` : `hover:-rotate-3`
            }`}
          />
        )}
        <div className="text-center md:text-left">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  ${
              variation === 'heroWithBackgroundImage'
                ? ` text-secondary-focus`
                : ``
            }`}
          >
            {heroheading}
          </h2>
          <PrismicRichText field={herotext} components={components} />
          {herobuttonlink && (
            <PrismicLink field={herobuttonlink} className="btn btn-secondary">
              {herobuttontext}
            </PrismicLink>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroWithFigure
