import "./App.css";
import Navbar from "./components/Navbar";
import Branding from "./components/Branding";
import Message from "./components/Message";
import Portfolio from "./components/Portfolio";
import Benefits from "./components/Benefits";
import WorkWithMe from "./components/WorkWithMe";
import Footer from "./components/Footer";
import TeckStack from "./components/TeckStack";
import ContactForm from "./components/ContactForm";
import { useEffect, useState } from "react";
import MobileBranding from "./components/MobileBranding";
import AboutMobile from "./components/AboutMobile";
import AboutDesktop from "./components/AboutDesktop";
import { Toaster } from "react-hot-toast";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);
  return (
    <>
      <Navbar></Navbar>
      {width >= breakpoint ? <Branding></Branding> : <MobileBranding />}
      <Message></Message>
      {width >= breakpoint ? <AboutDesktop></AboutDesktop> : <AboutMobile />}
      <Benefits></Benefits>
      <TeckStack></TeckStack>
      <Portfolio></Portfolio>
      <WorkWithMe></WorkWithMe>
      <ContactForm></ContactForm>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  );
}

export default App;
