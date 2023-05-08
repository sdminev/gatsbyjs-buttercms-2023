import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.buttercms.com/v2/content/?auth_token=9a50fb6252ff0804582816d7ac5f83b89a1364eb&keys=quotes`
      )
      .then((response) => {
        const quotes = response.data.data.quotes;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {quote && (
        <section id="quotes">
          <div className="container my-5 py-5">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="section-title text-center">
                  <h2>{quote.quote_text}</h2>
                  <p>{quote.author}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RandomQuote;
