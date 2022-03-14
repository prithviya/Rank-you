import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Service from "./components/Service"
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
          <Header/>
          <Routes>
                <Route path ="/" element ={<Home/>} />
                <Route path ="/about" element ={<About/>} />
                <Route path ="/service" element={<Service/>} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
