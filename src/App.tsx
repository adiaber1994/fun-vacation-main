import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Vacations from "./pages/Vacations";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="Vacations" element={<Vacations />} />
      </Routes>
    </>
  );
}

export default App;
