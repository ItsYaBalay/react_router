import "./App.css";
import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Yellow from "./components/Yellow";
import Orange from "./components/Orange";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <Navbar />
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/yellow" element={<Yellow />} />
            <Route path="/orange" element={<Orange />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
