import { useState } from "react";
import "./App.css";

function App() {
  //! creating state
  const [text, setText] = useState("");

  //! Methods
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const startGame = (e) => {};

  return (
    <form>
      <h1>How fast Do you Type? 🔥</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining: ???</h4>
      <button>Start</button>
      <h1>Word Count: ???</h1>
    </form>
  );
}

export default App;
