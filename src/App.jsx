import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Experience from "./components/Experience";
import CountrySelection from "./components/CountrySelection";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/resume" element={<HomePage />} /> */}
          <Route path="/resume" element={<HomePage />}></Route>
          <Route path="/resume/selectcountry" element={<CountrySelection />} />
          <Route
            path="/resume/experience-level"
            exact
            element={<Experience />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
