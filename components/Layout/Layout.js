import * as React from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'
import Footer from './Footer'
import { BsArrowReturnLeft } from 'react-icons/bs'

const Layout = ({ children, data: { logo, navigationlinks } }) => {
  return (
    <div className="relative">
      <ul id="nav-access" className="relative mx-auto">
        <li>
          <a
            href="#main-content"
            className="absolute z-50 -top-20 sm:left-1/4 text-2xl text-base-100 inline-block w-full sm:w-1/2 text-center bg-primary-content bg-opacity-30 transform focus:translate-y-20 transition-all duration-500 ease-in-out"
          >
            Skip to main content{' '}
            <span className="text-gray-800 px-3 py-0 bg-secondary text-base rounded-sm">
              Return
              <BsArrowReturnLeft className="w-3 h-3 inline text-gray-800 ml-1" />
            </span>
          </a>
        </li>
      </ul>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar logo={logo} navigationlinks={navigationlinks} />
        </header>
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
export default Layout
