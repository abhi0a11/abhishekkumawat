import "./App.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutDesktop from "./components/AboutDesktop";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume";
import HomePage from "./components/HomePage";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  const [top, setTop] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let newTop = window.scrollY;
      setTop(newTop);
    });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      {width >= breakpoint ? (
        <HomePage></HomePage>
      ) : (
        <LandingPage></LandingPage>
      )}
      {/* <LandingPage></LandingPage> */}
      <AboutDesktop></AboutDesktop>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Toaster></Toaster>
    </>
  );
}

export default App;
