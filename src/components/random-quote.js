import React, { useState, useEffect } from "react"
import axios from "axios"

const RandomQuote = () => {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    axios
      .get(
        `https://api.buttercms.com/v2/content/?auth_token=${process.env.GATSBY_BUTTER_CMS_API_KEY}&keys=quotes`
      )
      .then(response => {
        const quotes = response.data.data.quotes
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(randomQuote)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <>
      {quote && (
        <div>
          <h2>{quote.author}</h2>
          <p>{quote.quote_text}</p>
        </div>
      )}
    </>
  )
}

export default RandomQuote
