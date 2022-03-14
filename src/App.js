import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pizza from "./components/Pizza";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <div className="homeBackground">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Pizza" element={<Pizza />}></Route>
          {/* <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Explore" element={<Explore />}></Route>
          <Route path="/FilteredPage" element={<FilteredPage />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
