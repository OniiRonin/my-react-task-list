import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Tareas from "./components/Tareas";
import SobreNosotros from "./components/SobreNosotros";
import Menu from "./components/Menu";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </div>
  );
};

export default App;
