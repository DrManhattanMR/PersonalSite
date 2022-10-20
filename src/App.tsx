import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div>
          <Home/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
