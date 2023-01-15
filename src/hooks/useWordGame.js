import { useState, useEffect, useRef } from "react";

function useWordGame(defaultOnValue = 10) {
  //! creating state
  //   const STARTING_POINT = 5;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(defaultOnValue);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const [wordCount, setWordCount] = useState(0);

  const inputRef = useRef();

  //! Methods
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const startGame = (e) => {
    e.preventDefault();
    setIsTimeRunning(true);
    setTimeRemaining(defaultOnValue);
    inputRef.current.disabled = false;
    inputRef.current.focus();
    setText("");
    setWordCount(0);
  };

  const endGame = () => {
    setWordCount(wordCounter(text));
    setIsTimeRunning(false);
    if (wordCount < 0) {
      alert("Too Weak");
    } else if (wordCount <= 10) {
      alert("Some Potential You Have! ✨");
    } else if (wordCount <= 20) {
      alert("Looking Mad on Keyword 😳");
    } else if (wordCount <= 50) {
      alert("You are a master of Typing woah.. 🙌🎉");
    }
  };
  const wordCounter = (text) => {
    const trimWord = text.trim().split(" ");
    return trimWord.filter((word) => word !== "").length;
  };

  //! Useffect
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    handleChange,
    isTimeRunning,
    inputRef,
    text,
    timeRemaining,
    wordCount,
    startGame,
  };
}

export default useWordGame;
