'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { KeyTextField } from '@prismicio/client'
import { useForm } from 'react-hook-form'
import { addSubscriber } from '@/app/actions'
import { Button } from '@/components/ui/button'

type FormValues = {
  email: string
  token?: string
}

type SubmitButtonProps = {
  text?: KeyTextField
  variant?:
    | 'default'
    | 'secondary'
    | 'outline'
    | 'destructive'
    | 'ghost'
    | 'link'
}

interface NewsletterFormProps {
  buttoncolor?:
    | 'default'
    | 'secondary'
    | 'outline'
    | 'destructive'
    | 'ghost'
    | 'link'
  buttontext?: KeyTextField
  placeholdertext?: KeyTextField
  groupIds?: Array<KeyTextField>
}

const NewsletterForm = ({
  buttoncolor,
  buttontext,
  placeholdertext,
  groupIds,
}: NewsletterFormProps): React.JSX.Element => {
  const {
    register,
    trigger,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>()

  const [success, setSuccess] = React.useState<boolean | null>(null)
  const [formInteraction, setFormInteraction] = React.useState(false)

  const handleFocus = () => {
    if (!formInteraction) setFormInteraction(true)
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
        const scripts = document.head.querySelectorAll('script')
        // Loop through the HTMLcollection (array-like but not array)
        for (let i = 0; i < scripts.length; i++) {
          // find script whose src value includes "recaptcha/releases"
          // this script is added when main recaptcha script is loaded

          if (
            scripts?.item(i)?.attributes.getNamedItem('src') &&
            scripts
              ?.item(i)
              ?.attributes?.getNamedItem('src')
              ?.value.includes('recaptcha/releases')
          ) {
            document.head.removeChild(scripts.item(i)) // remove script from head
          }
        }
        document.head.removeChild(recaptchaScript) // remove main recaptcha script from head
        // remove the recaptcha badge from the bottom right corner
        const badge = document.querySelector('.grecaptcha-badge')
        if (badge?.parentElement) {
          badge.parentElement.remove()
        }
      }
    }
  }, [formInteraction])

  function SubmitButton({
    text = 'Submit',
    variant = 'default',
  }: SubmitButtonProps): React.JSX.Element {
    return (
      <Button
        disabled={isSubmitting}
        type="submit"
        aria-disabled={isSubmitting}
        variant={variant}
        className="hover:cursor-pointer"
      >
        {text}
      </Button>
    )
  }

  return (
    <>
      {success === true && (
        <p className="text-xl text-color-primary">
          Thank you for joining my newsletter. Check your inbox!
        </p>
      )}
      {success !== true && (
        <form
          className="my-6 flex flex-col gap-y-4 place-self-center"
          action={async (formData: FormData) => {
            trigger()
            if (!isValid) return
            // calling server action passed into the client component here (if the form is valid)

            window.grecaptcha?.ready(() => {
              // Use optional chaining here
              window.grecaptcha
                ?.execute('6LdegF8iAAAAADDOMwVAXSvPRZwr2GC_O_5cxNgs', {
                  // And here
                  action: 'submit',
                })
                .then(async (recaptchaToken: string) => {
                  formData.set('token', recaptchaToken)
                  const { message } = await addSubscriber(formData, groupIds)
                  if (message === 200) {
                    reset()
                    setSuccess(true)
                  }
                })
            })
          }}
        >
          <div
            className={cn('grid ', {
              'gap-y-14': errors.email,
            })}
          >
            <div className="relative ">
              {errors?.email && (
                <p className="error-text absolute -top-10">
                  {' '}
                  &darr; {errors?.email?.message}
                </p>
              )}
              <label htmlFor={'email'}>
                <span className="sr-only">What is your email address?</span>
                <input
                  id="email"
                  {...register('email', {
                    required: 'Your email address is required.',
                  })}
                  type="email"
                  placeholder={placeholdertext || 'Enter your email here'}
                  className={`w-full max-w-sm self-end rounded`}
                  onFocus={handleFocus}
                />
              </label>
            </div>
          </div>

          <div>
            <SubmitButton text={buttontext} variant={buttoncolor} />
            <p className="prose-a:text-primary-content prose prose-sm mt-3 prose-a:no-underline prose-a:hover:underline">
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
    </>
  )
}

export default NewsletterForm
