const axios = require('axios')
require('dotenv').config()

exports.handler = (event, context, callback) => {
  const { text } = event.queryStringParameters

  if (!text) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({ message: 'Text empty' })
    })
  }

  axios(
    `https://api.telegram.org/bot${process.env.BOT_API_KEY}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${text}`
  )
    .then(() => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: 'Yep' })
      })
    })
    .catch(e => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: e.message })
      })
    })
}
