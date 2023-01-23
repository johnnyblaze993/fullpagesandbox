import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Quotes.module.scss";

interface Props {}

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Positive anything is better than negative nothing.",
    author: "Elbert Hubbard",
  },
];

const Quotes: React.FC<Props> = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuoteIndex((currentQuoteIndex + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentQuoteIndex]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="quotes-container">
      <CSSTransition
        in={isVisible}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <div className="quote-text">
          <p>{currentQuote.text}</p>
          <p className="author">- {currentQuote.author}</p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Quotes;
