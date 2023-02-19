import React from "react";
import "./App.css";
import Navbar from "./Component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
    </div>
  );
}

export default App;
