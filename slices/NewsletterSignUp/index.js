import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const MailerLiteSignUp = ({ slice }) => {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [success, setSuccess] = React.useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const submitData = async formData => {
    setIsDisabled(true)
    try {
      const { email } = formData
      const groupIds = slice.items.map(item => item.mailerlitegroupid)
      await axios({
        url: '/api/newsletter',
        method: 'POST',
        data: { email, groupIds },
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
    console.log('addSubscriber run', emailAddress)
    submitData(emailAddress)
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
      {success === null && (
        <form
          className="grid grid-rows-2 gap-y-4"
          onSubmit={handleSubmit(addSubscriber)}
        >
          <label htmlFor="email" className="sr-only">
            What is your email address?
          </label>
          <input
            name="email"
            type="email"
            placeholder={placeholdertext}
            {...register('email', {
              required: 'Your email address is required.',
            })}
            className={`input input-bordered input-primary w-full max-w-s self-end`}
          />
          {errors.email && (
            <p className="text-error"> &uarr; {errors.email.message}</p>
          )}
          <input
            type={'submit'}
            className={`btn ${buttonColor} ${isDisabled ? `btn-disabled` : ``}`}
            value={buttontext}
          />
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
