'use server'
import { KeyTextField } from '@prismicio/client'
import axios, { AxiosError } from 'axios'

const recaptchaValidation = async (token: string) => {
  const result = await (async () => {
    try {
      const response = await axios({
        url: 'https://www.google.com/recaptcha/api/siteverify',
        method: 'POST',
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        },
      })
      return { successful: true, message: Number(response.data.score) }
    } catch (err: unknown) {
      const error = err as AxiosError
      let message
      if (error.response) {
        message = `reCAPTCHA server responded with non 2xx code: ${error.response.data}`
      } else if (error.request) {
        message = `No reCAPTCHA response received: ${error.request}`
      } else {
        message = `Error setting up reCAPTCHA response: ${error.message}`
      }
      return { successful: false, message }
    }
  })()
  return result
}

export async function addSubscriber(
  formData: FormData,
  groupIds: Array<KeyTextField> | undefined
) {
  'use server'
  const token = `${formData.get('token')}`

  const recaptchaResult = await recaptchaValidation(token)

  const captchaScore = Number(recaptchaResult.message)
  if (!recaptchaResult.successful) {
    // recaptcha was not successful
    return {
      statusCode: 400,
      message: recaptchaResult.message,
    }
  } else {
    if (captchaScore > 0.8) {
      // likley to be a human
      const API_KEY = process.env.MAILERLITE_API_KEY
      try {
        const ems_response = await axios.post(
          `https://connect.mailerlite.com/api/subscribers`,
          {
            email: formData.get('email'),
            groups: groupIds,
          },
          {
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              Accept: 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        )
        if (ems_response.status === 200) {
          return { message: ems_response.status }
        }
      } catch (e: unknown) {
        const error = e as AxiosError
        return { message: error }
      }
    }
  }
  return { message: recaptchaResult.message }
}
