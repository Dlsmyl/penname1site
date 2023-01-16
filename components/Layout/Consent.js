import * as React from 'react'
import { setCookie, hasCookie } from 'cookies-next'
import { HiX } from 'react-icons/hi'

const Consent = () => {
  const [consent, setConsent] = React.useState(true)
  React.useEffect(() => {
    setConsent(hasCookie(`localConsent`))
    setTimeout(() => {
      let banner = document.querySelector('#consent-banner')
      banner.classList.add('opacity-100')
    }, 3500)
  }, [])

  const acceptCookie = () => {
    setConsent(true)
    setCookie(`localConsent`, 'true', {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: true,
    })
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    })
    console.log('accepting cookies')
  }
  const denyCookie = () => {
    setConsent(true)
    setCookie('localConsent', 'false', {
      maxAge: 60 * 60 * 24 * 14,
      sameSite: true,
    })
    console.log('denying cookies for 2 weeks')
  }
  const closeP = () => {
    setConsent(true)
    console.log('closing')
  }
  if (consent === true) {
    return null
  }

  return (
    <div
      id="consent-banner"
      className={`transition duration-500 ease-in opacity-0 fixed bottom-0 w-full p-3 bg-secondary bg-opacity-95 grid md:grid-cols-5 ${
        consent ? 'hidden' : ''
      }`}
    >
      <p className="prose prose-sm mx-auto md:col-span-3 px-6 text-left my-4">
        I respect your right to privacy. Period. If you wish to allow cookies, I
        will get to learn a few things like what pages my readers visit, what
        country they are from, how long they stay, etc. Please choose your
        preference below. Data are only collected if you accept (which is how it
        should be).
      </p>
      <div className="flex md:col-span-2 items-center justify-evenly my-4">
        <button
          className="absolute top-2 right-2"
          onClick={e => {
            closeP()
          }}
        >
          <HiX className="w-6 h-6 text-base-100" />
          <span className="sr-only">Close</span>
        </button>
        <button
          onClick={e => denyCookie()}
          className="px-4 btn btn-ghost text-neutral-content"
        >
          Deny All
        </button>
        <button
          onClick={() => {
            acceptCookie()
          }}
          className="px-4 btn btn-primary"
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
export default Consent
