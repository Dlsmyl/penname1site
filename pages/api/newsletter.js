import axios from 'axios'

const addSubscriber = async (address, key, lists) => {
  const result = await (async () => {
    const baseUrl = 'https://connect.mailerlite.com'
    const endPoint = '/api/subscribers'
    const url = baseUrl + endPoint
    try {
      const response = await axios.post(
        url,
        {
          email: address,
          groups: lists,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${key}`,
          },
        }
      )
      return { successful: true, message: response }
    } catch (err) {
      console.log(err)
    }
  })()
  return result
}

const recaptchaValidation = async token => {
  const result = await (async () => {
    try {
      const response = await axios({
        url: 'https://www.google.com/recaptcha/api/siteverify',
        method: 'POST',
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        },
      })
      return { successful: true, message: response.data.score }
    } catch (error) {
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

export default async function handler(req, res) {
  const {
    body: { email, groupIds, token },
  } = req
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
  }
  // Check if Google thinks this interaction is suspicious
  const recaptchaResult = await recaptchaValidation(token)

  if (!recaptchaValidationResult.successful) {
    // this is sent if the recaptcha was not successful
    // res.status(400).send(recaptchaValidationResult.message);
    return {
      statusCode: 400,
      body: recaptchaValidationResult.message,
    }
  } else {
    // Make sure the value returned is numeric
    const googleCaptchaScore = Number(recaptchaValidationResult.message)
    // Arbitrarily setting the threshold of suspicion @ 0.5 adjust as needed
    if (googleCaptchaScore > 0.6) {
      const API_KEY = process.env.MAILERLITE_API_KEY
      const mailerLiteResult = await addSubscriber(email, API_KEY, groupIds)
      if (mailerLiteResult.successful) {
        res.status(200).send('Subscriber Added')
      } else {
        res.status(400).send('Error with MailerLite integration')
      }
    }
  }
}
