import React from "react";
import "../App.css";

function RandomQuote({ quote, author, color, newQuote }) {
  return (
    <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text" style={{ color: `${color}` }}>
          <i className="bi bi-quote fs-1 me-1"></i>
          <span id="text">{quote}</span>
        </div>
        <div className="quote-author" style={{ color: `${color}` }}>
          - <span id="author">{author}</span>
        </div>
        <div className="buttons">
          <a
            className="button d-inline-block"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}
            style={{
              backgroundColor: `${color}`,
            }}
          >
            <i className="bi bi-twitter"></i>
          </a>
          <button
            id="new-quote"
            className="button d-inline-block"
            style={{ backgroundColor: `${color}` }}
            onClick={newQuote}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className="text-light text-center mt-3 fs-4">by Lizzie</div>
    </div>
  );
}

export default RandomQuote;
