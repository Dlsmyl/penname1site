import React from 'react'
import Image from 'next/future/image'
import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'

const HeroWithFigure = ({ slice }) => {
  // define HTML serializer
  const components = {
    paragraph: ({ node, children }) => <p className="my-4">{children}</p>,
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
  } else {
    bgStyle = {
      background: herobackgroundcolor ? herobackgroundcolor : '#F9FAFB',
    }
  }
  console.log('bgStyle => ', bgStyle)
  return (
    <section className={`hero min-h-screen`} style={bgStyle}>
      <div
        className={`hero-content flex-col ${
          herofigurelocation ? `lg:flex-row-reverse` : `lg:flex-row`
        }`}
      >
        <Image
          src={herofigure.url}
          alt={herofigure.alt}
          width={260}
          height={400}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-5xl font-bold">{heroheading}</h2>
          <PrismicRichText field={herotext} components={components} />
          <Link href={herobuttonlink.url}>
            <a className="btn btn-primary">{herobuttontext}</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroWithFigure
