import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react'
import Link from 'next/link'
import * as React from 'react'
import Headroom from 'react-headroom'
import HeadlessMenu from './Menu'
const Navbar = ({ logo, navigationlinks }) => {
  return (
    <Headroom className="text-white">
      <div className="flex justify-between items-center mx-auto py-3 px-2 md:px-6">
        <div
          className="flex justify-start items-center text-primary-content"
          id="branding"
        >
          <Link href="/">
            <a>
              {logo.url ? <PrismicNextImage field={logo} /> : 'Jamie Whitmann'}
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
          </ul>
        </nav>
      </div>
    </Headroom>
  )
}

export default Navbar
