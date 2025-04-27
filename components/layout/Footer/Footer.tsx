import React from 'react'
import Section from '../Section'
import Link from 'next/link'
import Copyright from './Copyright'

const Footer = () => {
  return (
    <Section as="footer">
      <div className="my-4 text-center lg:my-8">
        <Link href="/privacy">Privacy</Link>
      </div>
      <div className="text-center text-xs lg:text-sm">
        <Copyright />
      </div>
    </Section>
  )
}

export default Footer
