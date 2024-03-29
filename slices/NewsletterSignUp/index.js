import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Abril_Fatface } from 'next/font/google'
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] })

const MailerLiteSignUp = ({ slice }) => {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [success, setSuccess] = React.useState(null)
  const [formInteraction, setFormInteraction] = React.useState(false)

  const handleFocus = () => {
    !formInteraction && setFormInteraction(true)
  }

  React.useEffect(() => {
    if (formInteraction) {
      const recaptchaScript = document.createElement('script')
      recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=6LdegF8iAAAAADDOMwVAXSvPRZwr2GC_O_5cxNgs`
      recaptchaScript.async = true
      recaptchaScript.defer = true
      document.head.appendChild(recaptchaScript)
      return () => {
        // Get all script tags: returns HTMLcollection
        const scripts = document.getElementsByTagName('script')
        // Loop through the HTMLcollection (array-like but not array)
        for (var i = 0; i < scripts.length; i++) {
          // find script whose src value includes "recaptcha/releases"
          // this script is added when main recaptcha script is loaded

          if (
            scripts.item(i).attributes.getNamedItem('src') &&
            scripts
              .item(i)
              .attributes.getNamedItem('src')
              .value.includes('recaptcha/releases')
          ) {
            document.head.removeChild(scripts.item(i)) // remove script from head
          }
        }
        document.head.removeChild(recaptchaScript) // remove main recaptcha script from head
        // remove the recaptcha badge from the bottom right corner
        let badge = document.querySelector('.grecaptcha-badge')
        if (badge) {
          badge.parentElement.remove()
        }
      }
    }
  }, [formInteraction])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const submitData = async (formData, token) => {
    setIsDisabled(true)
    const formKeys = Object.keys(formData)
    const email = formData[formKeys[0]]
    try {
      const groupIds = slice.items.map(item => item.mailerlitegroupid)
      await axios({
        url: '/api/newsletter',
        method: 'POST',
        data: { email, groupIds, token },
      }).then(res => {
        if (res.status === 200) {
          reset()
          setSuccess(true)
          setTimeout(() => {
            setSuccess(null)
            setIsDisabled(false)
          }, 3000)
        } else {
          console.log('res.status not 200')
          setSuccess(false)
          reset()
        }
      })
    } catch (err) {
      if (err.response) {
        console.log('server responded with non 2xx code: ', err.response.data)
      } else if (err.request) {
        console.log('no response received: ', err.request)
      } else {
        console.log('Error setting up response: ', err.message)
      }
    }
  }

  const addSubscriber = async emailAddress => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute('6LdegF8iAAAAADDOMwVAXSvPRZwr2GC_O_5cxNgs', {
          action: 'submit',
        })
        .then(token => {
          submitData(emailAddress, token)
        })
    })
  }
  const {
    primary: {
      buttoncolor,
      buttontext,
      description,
      formlocation,
      placeholdertext,
      title,
    },
    id,
  } = slice
  let formSide
  switch (formlocation) {
    case false:
      formSide = 'order-last'
      break
    default:
      break
  }
  let buttonColor
  switch (buttoncolor) {
    case 'primary':
      buttonColor = 'btn-primary'
      break
    case 'secondary':
      buttonColor = 'btn-secondary'
      break
    case 'accent':
      buttonColor = 'btn-accent'
      break
    case 'info':
      buttonColor = 'btn-info'
      break
    case 'neutral':
      buttonColor = 'btn-neutral'
      break
    case 'success':
      buttonColor = 'btn-success'
      break
    case 'warning':
      buttonColor = 'btn-warning'
      break
    case 'error':
      buttonColor = 'btn-error'
      break
    default:
      break
  }
  const components = {
    heading2: ({ node, children }) => {
      return (
        <h2 className={`text-center md:text-left ${abril.className}`}>
          {children}
        </h2>
      )
    },
    paragraph: ({ node, children }) => {
      return <p className="text-left">{children}</p>
    },
  }
  return (
    <section className="grid md:grid-cols-2 max-w-screen-lg mx-auto my-4 md:my-6 lg:my-8 xl:my-10 md:gap-x-4 px-4">
      <div className={`prose md:prose-lg lg:prose-xl ${formSide}`}>
        <PrismicRichText field={title} components={components} />
        <PrismicRichText field={description} components={components} />
      </div>
      {success === null && (
        <form
          className="flex flex-col gap-y-4 place-self-center my-6"
          onSubmit={handleSubmit(addSubscriber)}
        >
          <label htmlFor={`email_${id}`}>
            <span className="sr-only">What is your email address?</span>
            <input
              name={`email_${id}`}
              type="email"
              placeholder={placeholdertext}
              {...register(`email_${id}`, {
                required: 'Your email address is required.',
              })}
              className={`what input input-bordered input-primary w-full max-w-s self-end`}
              onFocus={handleFocus}
            />
          </label>

          {errors.email && (
            <p className="text-error"> &uarr; {errors.email.message}</p>
          )}
          <div>
            <input
              type={'submit'}
              className={`btn w-full ${buttonColor} ${
                isDisabled ? `btn-disabled` : ``
              }`}
              value={buttontext}
              onFocus={handleFocus}
            />
            <p className="prose prose-sm prose-a:text-primary-content prose-a:no-underline hover:prose-a:underline">
              This site is protected by reCAPTCHA and the{' '}
              <a href="https://policies.google.com/privacy">
                Google Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://policies.google.com/terms">Terms of Service</a>{' '}
              apply.
            </p>
          </div>
        </form>
      )}
      {success === true && (
        <div className="grid grid-rows-1 place-items-center">
          <p className="prose-xl">I 💗 You! Thank you for subscribing.</p>
        </div>
      )}
      {success === false && (
        <div className="grid grid-rows-1 place-items-center">
          <p className="prose-xl">
            😔 Something went wrong behind the scenes. Please try again later.
          </p>
        </div>
      )}
    </section>
  )
}

export default MailerLiteSignUp
