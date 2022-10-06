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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
  }
  const API_KEY = process.env.NMAILERLITE_API_KEY
  const mailerLiteResult = await addSubscriber(
    req.body.email,
    API_KEY,
    req.body.groupIds
  )
  if (mailerLiteResult.successful) {
    res.status(200).send('Subscriber Added')
  } else {
    res.status(400).send('Error with MailerLite integration')
  }
}
