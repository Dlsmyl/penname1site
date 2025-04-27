'use client'
import {
  MainNavigationDocumentDataNavigationlinksItem,
  MainNavigationDocumentDataSociallinksItem,
} from '@/prismicio-types'
import { ImageField, isFilled } from '@prismicio/client'
import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { cn } from '@/lib/utils'
import Section from '../Section'
import Link from 'next/link'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import Heading from '@/components/Heading'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaTwitterSquare,
} from 'react-icons/fa'
interface NavbarProps {
  logo?: ImageField
  navigation?: MainNavigationDocumentDataNavigationlinksItem[]
  social?: MainNavigationDocumentDataSociallinksItem[]
}

const Navbar = ({ logo, navigation, social }: NavbarProps) => {
  const container = useRef(null)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous: number = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else if (latest === 0) {
      setHidden(false)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      ref={container}
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={cn(
        'sticky top-0 z-20 w-full transition duration-300 ease-in-out bg-background/80 backdrop-blur-md'
      )}
    >
      <Section
        width="xl"
        padded={false}
        className="py-1 md:py-2 lg:py-3 px-2 md:px-3"
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            {isFilled.image(logo) ? (
              <div className="flex items-center">
                <PrismicNextImage
                  field={logo}
                  imgixParams={{ ar: '1:1', fit: 'crop' }}
                  width={80}
                  height={80}
                />
                <Heading as="h1" size="3xl" className="p-1.5">
                  Jamie Whitmann
                </Heading>
              </div>
            ) : (
              <Heading as="h1" size="4xl" className="p-1.5">
                Jamie Whitmann
              </Heading>
            )}
          </Link>
          <div className="flex items-center gap-x-4 lg:gap-x-8">
            {navigation !== undefined && (
              <>
                <DesktopMenu navigation={navigation} />
                <MobileMenu navigation={navigation} logo={logo} />
              </>
            )}
            {social !== undefined && (
              <div>
                {social.map((item, i) => {
                  return (
                    <PrismicNextLink
                      key={'social' + item.sociallink.link_type + i}
                      field={item.sociallink}
                    >
                      {item.socialplatform === 'Facebook' ? (
                        <FaFacebookSquare className="w-6 h-6 text-primary-content inline" />
                      ) : item.socialplatform === 'Instagram' ? (
                        <FaInstagramSquare className="w-6 h-6 text-primary-content inline" />
                      ) : item.socialplatform === 'TikTok' ? (
                        <FaTiktok className="w-6 h-6 text-primary-content inline" />
                      ) : item.socialplatform === 'Twitter' ? (
                        <FaTwitterSquare className="w-6 h-6 text-primary-content inline" />
                      ) : (
                        'Icon Not Found'
                      )}
                    </PrismicNextLink>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </Section>
    </motion.header>
  )
}

export default Navbar
