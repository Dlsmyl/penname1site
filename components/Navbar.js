import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react'
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
          {logo.url ? <PrismicNextImage field={logo} /> : 'Jamie Whitmann'}
        </div>
        <nav>
          <HeadlessMenu links={navigationlinks} />
          <ul className="menu menu-horizontal hidden md:block text-primary-content">
            {navigationlinks.length &&
              navigationlinks.map(link => {
                return (
                  <li key={link.menuitem.id}>
                    <PrismicLink field={link.menuitem}>
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
