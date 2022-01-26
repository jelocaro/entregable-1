import "./App.css";
import { useState } from "react";

//Components
import QuoteBox from "./components/QuoteBox.jsx";

//json
import quotes from "./quotes.json";

function App() {
  const colors = [
    "red",
    "black",
    "#cd853f",
    "green",
    "#FF8066",
    "#008F7A",
    "#0081CF",
    "#B0A8B9",
  ];

  //State
  const [getQuote, setGetQuote] = useState(quotes[getNumber(quotes.length)]);
  const [background, setBackground] = useState(
    colors[getNumber(colors.length)]
  );

  const handleQuote = () => {
    const index = getNumber(quotes.length);
    setGetQuote(quotes[index]);
    setBackground(colors[getNumber(colors.length)]);
  };

  return (
    <div className="App" style={{ background }}>
      <QuoteBox
        phrase={getQuote.quote}
        author={getQuote.author}
        handleQuote={handleQuote}
        background={background}
      />
    </div>
  );
}

const getNumber = (max) => Math.floor(Math.random() * max);
export default App;
