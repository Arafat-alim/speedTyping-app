import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  //! creating state
  const STARTING_POINT = 5;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_POINT);
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
    setTimeRemaining(STARTING_POINT);
    inputRef.current.disabled = false;
    inputRef.current.focus();
    setText("");
    setWordCount(0);
  };

  const endGame = () => {
    setWordCount(wordCounter(text));
    setIsTimeRunning(false);
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

  return (
    <form>
      <h1>How fast Do you Type? 🔥</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Show your Limit..."
        disabled={!isTimeRunning}
        ref={inputRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </form>
  );
}

export default App;
