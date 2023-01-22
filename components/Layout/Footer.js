import * as React from 'react'
import Link from 'next/link'

const Footer = () => {
  React.useEffect(() => {
    document.querySelector('#copyright-year').innerHTML =
      new Date().getFullYear()
  }, [])
  return (
    <footer className="flex flex-col justify-center items-center bg-secondary text-base-100 p-4 md:p-6 lg:p-8 xl:p-10 space-y-4 mt-auto">
      <div className="grid grid-flow-col gap-4">
        <Link href={'/privacy'} className="link link-hover">
          Privacy
        </Link>
      </div>
      <div className="text-center md:text-left">
        <p>
          Copyright © <span id="copyright-year">calculating current year</span>{' '}
          - All right reserved by Jamie Whitmann
        </p>
      </div>
    </footer>
  )
}
export default Footer
