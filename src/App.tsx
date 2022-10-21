
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/works" element={<Works/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
      </div>
    /*<div>
      <Navbar />
      <div>
          <Footer/>
      </div>
    </div>*/
  );
}

export default App;
