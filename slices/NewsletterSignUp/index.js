import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const MailerLiteSignUp = ({ slice }) => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('handling submit')
  }
  const {
    primary: {
      buttoncolor,
      buttontext,
      description,
      formlocation,
      mailerlitegroupid,
      placeholdertext,
      title,
    },
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
      return <h2 className="font-abril">{children}</h2>
    },
  }
  return (
    <section className="grid md:grid-cols-2 max-w-screen-lg mx-auto my-4 md:my-6 lg:my-8 xl:my-10 md:gap-x-4 px-4">
      <div className={`prose md:prose-lg lg:prose-xl ${formSide}`}>
        <PrismicRichText field={title} components={components} />
        <PrismicRichText field={description} />
      </div>
      <form className="grid grid-rows-2 gap-y-4">
        <input
          type="text"
          placeholder={placeholdertext}
          className={`input input-bordered input-primary w-full max-w-s self-end`}
        />
        <input
          type={'submit'}
          className={`btn ${buttonColor}`}
          value={buttontext}
          onClick={handleSubmit}
        />
      </form>
    </section>
  )
}

export default MailerLiteSignUp
