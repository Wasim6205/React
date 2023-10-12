import React, { useState } from "react";
import "./RandomQuote.css";
// import twitter_icon from "../Assets/twitter-x.png";
// import reload_icon from "../Assets/reload.png";
import { AiOutlineReload } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const RandomQuote = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "johan Wolfgang von Goethe",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  loadQuotes();

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <AiOutlineReload
            className="cursor-pointer text-white"
            fontSize={25}
              onClick={() => {
                random();
              }}
            />
            <RiTwitterXFill
            className="cursor-pointer text-white"
            fontSize={25}
              onClick={() => {
                twitter();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
