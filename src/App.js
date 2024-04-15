import "./App.css";
import Games from "./comps/Games";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TotalGames from "./comps/TotalGames";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TotalGames />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
