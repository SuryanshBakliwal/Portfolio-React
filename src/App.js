import "./App.css";
import About from "./components/About";
// import Contact from "./components/Contact";
import Home from "./components/Home";
// import "./components/canvas.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className="App" style={{ height: "100vh", width: "100vw" }}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route exact path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
