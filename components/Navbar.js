import Image from 'next/image'
import { PrismicImage } from '@prismicio/react'
import PrismicNextLink from './PrismicNextLink'
import Link from 'next/link'
import * as React from 'react'
import Headroom from 'react-headroom'
import HeadlessMenu from './Menu'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaTwitterSquare,
} from 'react-icons/fa'
const Navbar = ({ logo, navigationlinks, sociallinks }) => {
  return (
    <Headroom className="text-white">
      <div className="flex justify-between items-center mx-auto py-3 px-2 md:px-6">
        <div
          className="flex justify-start items-center text-primary-content"
          id="branding"
        >
          <Link href="/">
            {logo.url ? (
              <PrismicImage field={logo} className="w-20 h-20" />
            ) : (
              'Jamie Whitmann'
            )}
            <span className="sr-only">Return to Homepage</span>
          </Link>
        </div>
        <nav>
          <HeadlessMenu links={navigationlinks} />
          <ul className="hidden rounded-box text-primary-content md:grid grid-flow-col gap-x-4">
            {navigationlinks.length &&
              navigationlinks.map(link => {
                return (
                  <li key={link.menuitem.id}>
                    <PrismicNextLink
                      field={link.menuitem}
                      className="hover:bg-primary-focus hover:bg-opacity-50 rounded px-6 py-4"
                    >
                      {link.menuitemtext}
                    </PrismicNextLink>
                  </li>
                )
              })}
            {sociallinks.length &&
              sociallinks.map(link => {
                const {
                  sociallink: { url },
                  socialplatform,
                } = link
                let srmessage = `Visit us on ${socialplatform}`
                return (
                  <li key={url}>
                    <PrismicNextLink
                      field={link.sociallink}
                      className="hover:bg-primary-focus hover:bg-opacity-50 rounded px-6 py-4"
                    >
                      {socialplatform === 'Facebook' ? (
                        <FaFacebookSquare className="w-6 h-6 text-primary-content inline" />
                      ) : socialplatform === 'Instagram' ? (
                        <FaInstagramSquare className="w-6 h-6 text-primary-content inline" />
                      ) : socialplatform === 'TikTok' ? (
                        <FaTiktok className="w-6 h-6 text-primary-content inline" />
                      ) : socialpatform === 'Twitter' ? (
                        <FaTwitterSquare className="w-6 h-6 text-primary-content inline" />
                      ) : (
                        'Icon Not Found'
                      )}
                      <span className="sr-only">{srmessage}</span>
                    </PrismicNextLink>
                  </li>
                )
              })}
          </ul>
        </nav>
      </div>
    </Headroom>
  )
}

export default Navbar
