import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
