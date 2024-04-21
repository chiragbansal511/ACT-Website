import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Aboutus from "./pages/Aboutus/Aboutus";

const AppRoute = () => {
  return (
    <>
    <NavBar/>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Aboutus />}/>
          <Route path="/Navbar"/>
          <Route path="/Landing"/>
          <Route path="/About"/>
          <Route path="/Resources"/>
          <Route path="/Contact"/>
          <Route path="/Submissions"/>
          <Route path="/Support"/>
          <Route path="/Evaluation"/>
          <Route path="/People"/>
          <Route path="*"/>
        </Routes>
      </Suspense>
    </Router>
    <Footer/>
    </>
  );
};

export default AppRoute;
