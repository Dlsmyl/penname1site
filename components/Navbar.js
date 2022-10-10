import Image from 'next/future/image'
import { PrismicLink } from '@prismicio/react'
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
            <a>
              {logo.url ? (
                <Image
                  src={logo.url}
                  alt={logo.alt || ''}
                  width={162}
                  height={60}
                />
              ) : (
                'Jamie Whitmann'
              )}
              <span className="sr-only">Return to Homepage</span>
            </a>
          </Link>
        </div>
        <nav>
          <HeadlessMenu links={navigationlinks} />
          <ul className="hidden rounded-box text-primary-content md:grid grid-flow-col gap-x-4">
            {navigationlinks.length &&
              navigationlinks.map(link => {
                return (
                  <li key={link.menuitem.id}>
                    <PrismicLink
                      field={link.menuitem}
                      className="hover:bg-accent-focus hover:bg-opacity-50 rounded px-6 py-4"
                    >
                      {link.menuitemtext}
                    </PrismicLink>
                  </li>
                )
              })}
            {sociallinks.length &&
              sociallinks.map(link => {
                const {
                  sociallink: { url },
                  socialplatform,
                } = link
                return (
                  <li key={url}>
                    <PrismicLink
                      field={link.sociallink}
                      className="hover:bg-accent-focus hover:bg-opacity-50 rounded px-6 py-4"
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
                    </PrismicLink>
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
