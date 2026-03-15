import Header from "./components/Header";
import FlashCardList from "./components/FlashCardList";
import data from "./data/flashCards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <FlashCardList cards={data} />
    </div>
  );
}

export default App;