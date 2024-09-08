import "./App.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutDesktop from "./components/AboutDesktop";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <AboutDesktop></AboutDesktop>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Toaster></Toaster>
    </>
  );
}

export default App;
