import { JSX } from 'react'

const Copyright = (): JSX.Element => {
  return (
    <span>
      &copy; {new Date().getFullYear()} All rights reserved by Jamie Whitmann
    </span>
  )
}

export default Copyright
