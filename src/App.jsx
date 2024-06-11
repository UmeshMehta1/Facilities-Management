import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          {/* <Route path="blogs" element={<Blog />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />

          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
