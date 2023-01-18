import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Project from "./pages/Project";
import Footer from "./pages/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import DetailsEdu1 from "./pages/Details/Education/Pinecone";

function App() {
  const Main = () => {
    return <>
    <Navbar/>
        <About/>
        <Contact/>
        <Hero/>
        <Project/>
        <Footer/></>
  }
  const Navo = () => {
    return <>
    <Navbar/>
    <DetailsEdu1/>
       </>
  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}>
        
      </Route>
      <Route path="/pinecone" element={<Navo/>}></Route>

    </Routes>
    </>

  );
}

export default App;
