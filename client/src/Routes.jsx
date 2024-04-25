import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Aboutus from "./pages/Aboutus/Aboutus";
import Support from "./pages/Support/Support";
import Evaluation from "./pages/Evaluation/Evaluation";
import Contact from "./pages/Contact/Contact";
import Submission from "./pages/Submission/Submission";

const AppRoute = () => {
  return (
    <>
    <NavBar/>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Navbar"/>
          <Route path="/Landing"/>
          <Route path="/About" element={<Aboutus />}/>
          <Route path="/Resources"/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Submission" element={<Submission />}/>
          <Route path="/Support" element={<Support/>}/>
          <Route path="/Evaluation" element={<Evaluation/>}/>
          <Route path="*"/>
        </Routes>
      </Suspense>
    </Router>
    <Footer/>
    </>
  );
};

export default AppRoute;
