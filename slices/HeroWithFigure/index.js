import React from 'react'
import Image from 'next/future/image'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

const HeroWithFigure = ({ slice }) => {
  // define HTML serializer
  const components = {
    paragraph: ({ node, children }) => (
      <p
        className={`my-4 ${
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
    }
  } else {
    bgStyle = {
      background: herobackgroundcolor ? herobackgroundcolor : '#F9FAFB',
    }
  }

  return (
    <section className={`hero min-h-screen relative`} style={bgStyle}>
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
            <a>
              <Image
                src={herofigure.url}
                alt={herofigure.alt || ''}
                width={260}
                height={400}
                className="max-w-sm rounded-lg shadow-2xl transition duration-300 ease-in-out hover:scale-105 hover:-rotate-3"
              />
            </a>
          </Link>
        ) : (
          <Image
            src={herofigure.url}
            alt={herofigure.alt || ''}
            width={260}
            height={400}
            className="max-w-sm rounded-lg shadow-2xl transition duration-300 ease-in-out hover:scale-105 hover:-rotate-3"
          />
        )}
        <div>
          <h2
            className={`text-5xl font-bold ${
              variation === 'heroWithBackgroundImage'
                ? ` text-secondary-focus`
                : ``
            }`}
          >
            {heroheading}
          </h2>
          <PrismicRichText field={herotext} components={components} />
          {herobuttonlink && (
            <Link href={herobuttonlink.url}>
              <a className="btn btn-secondary">{herobuttontext}</a>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroWithFigure
