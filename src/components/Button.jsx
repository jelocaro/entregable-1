import React from "react";

//Styles
import "./button.css";

const Button = ({ handleQuote, background }) => {
  return (
    <div className="arrow-container">
      <button
        style={{ background }}
        onClick={handleQuote}
        className="arrow-button"
      >
        <i style={{ fontSize: "1rem" }} class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Button;
