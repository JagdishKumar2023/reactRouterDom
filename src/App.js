// import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { Contact } from "./components/Contact";
// import { Home } from "./components/Home";
// import { About } from "./components/About";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <h1>Welcome react router dom</h1>

      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
