import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import Home from "./Home";
import BadHabits from "./BadHabits";
import './App.css'; // We'll define styles here
import NavBar from "./NavBar/NavBar";
import GoodHabits from "./GoodHabits";

function App() {
  return (
    <HashRouter>
      <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/good-habits" element={<GoodHabits />} />
            <Route path="/bad-habits" element={<BadHabits />} />
          </Routes> 
    </HashRouter>
  );
}

export default App;
