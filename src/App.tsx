import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Works from "./pages/Works";

import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/Works" element={<Works />} />
    </Routes>
  );
};
export default App;
