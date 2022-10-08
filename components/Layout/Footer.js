import * as React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-neutral-content text-base-100 p-4 md:p-6 lg:p-8 xl:p-10 space-y-4 mt-auto">
      <div className="grid grid-flow-col gap-4">
        <Link href={'/privacy'}>
          <a className="link link-hover">Privacy</a>
        </Link>
      </div>
      <div className="text-center md:text-left">
        <p>Copyright © 2022 - All right reserved by Jamie Whitmann</p>
      </div>
    </footer>
  )
}
export default Footer
