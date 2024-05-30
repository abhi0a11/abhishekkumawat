import "./App.css";
import Navbar from "./components/Navbar";
import Branding from "./components/Branding";
import Message from "./components/Message";
import Portfolio from "./components/Portfolio";
import Benefits from "./components/Benefits";
import WorkWithMe from "./components/WorkWithMe";
import Footer from "./components/Footer";
import TeckStack from "./components/TeckStack";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Branding></Branding>
      <Message></Message>
      <About></About>
      <Benefits></Benefits>
      <TeckStack></TeckStack>
      <Portfolio></Portfolio>
      <WorkWithMe></WorkWithMe>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

export default App;
