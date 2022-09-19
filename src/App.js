import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header id="#home" />
    <About id="#about" />
    <Work id="#work" />
    <Skills id="#skills" />
    <Testimonial id="#testimonial" />
    <Footer id="#contact" />
  </div>
);

export default App;
