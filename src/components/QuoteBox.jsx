import React from "react";

import Button from "./Button";

//Styles
import "../components/quoteBox.css";

const QuoteBox = ({ phrase, author, handleQuote, background }) => {
  return (
    <div className="principal-card">
      <div className="phrase-styles">
        <div className="quotes-anchor">
          <i
            className="quotes"
            class="fas fa-quote-left"
            style={{ color: background }}
          ></i>
        </div>
        <p className="phrase" style={{ color: background }}>
          {phrase}
        </p>
      </div>
      <div className="author-styles">
        <p style={{ color: background }}>{author}</p>
      </div>
      <Button handleQuote={handleQuote} background={background} />
    </div>
  );
};

export default QuoteBox;
