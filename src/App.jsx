import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";
import AddQuestion from "./AddQuestion";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <nav className="main-navigation">
          <Link className="link" to="/">
            Home
          </Link>

          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/addQuestion">
            Add Question
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addQuestion" element={<AddQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
