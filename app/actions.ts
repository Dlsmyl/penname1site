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
        const baseUrl = 'https://connect.mailerlite.com'
        const endPoint = '/api/subscribers'
        const url = baseUrl + endPoint
        const email = formData.get('email')
        const ems_response = await axios.post(
          url,
          {
            email,
            groups: groupIds,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        )
        if (ems_response.status === 200) {
          return { message: ems_response.status }
        }
      } catch (e: unknown) {
        console.error('Error calling MailerLite API:', e) // Log the full error on the server
        const error = e as AxiosError

        // Extract serializable information from the AxiosError
        let errorMessage = 'Failed to subscribe.'
        if (error.response) {
          // Server responded with a status code outside the 2xx range
          errorMessage = `Subscription failed: ${error.response.status} - ${JSON.stringify(error.response.data) || error.message}`
        } else if (error.request) {
          // Request was made but no response received
          errorMessage = 'Subscription failed: No response from MailerLite.'
        } else {
          // Something else happened in setting up the request
          errorMessage = `Subscription failed: ${error.message}`
        }

        return { message: errorMessage, success: false } // Return only serializable data
      }
    }
  }
  return { message: recaptchaResult.message }
}
