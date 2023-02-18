import React from "react";
import Login from "./Component/Login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./Component/Register";
import Navbar from "./Component/Nav";
import HomePage from "./Component/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
