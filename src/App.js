import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Testimonials from "./Pages/Testimonials";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";
import Scroll from "../src/Components/ScrollTop";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1400);
  }, []);
  return (
    <div>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Helmet>
            <title>NSP Stacks Solutions</title>
            <meta
              name="description"
              content="We NSP Stacks Solutions are indulged in offering investment advisory. Being a specialist in investing, we are working effeciently to deliver superior results in shorter times."
            />
            <meta name="keywords" content="Investing, Stocks, Stock Market, Trading" />
          </Helmet>
          <Navbar />
          <Scroll />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Testimonials" element={<Testimonials />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
