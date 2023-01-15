import useWordGame from "./hooks/useWordGame";
import "./App.css";

function App() {
  const {
    handleChange,
    isTimeRunning,
    inputRef,
    text,
    timeRemaining,
    wordCount,
    startGame,
  } = useWordGame(5);
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
