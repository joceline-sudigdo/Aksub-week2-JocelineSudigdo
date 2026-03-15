import FlashCardList from "./components/FlashCardList";
import data from "./data/flashCards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <p className="jargon">From Beginner to Advanced Questions</p>
        <div className="title">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React Logo"
            className="logo"
          />
          <h1>The React Flash Cards.</h1>
        </div>
        <p className="subtitle">Test your react knowledge by answering the flashcards below</p>
      </div>
      
      <FlashCardList cards={data} />
    </div>
  );
}

export default App;