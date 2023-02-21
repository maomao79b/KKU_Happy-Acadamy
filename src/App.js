import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";


function App() {
  return (
    <div>
      <Routes>
          <Route id="login" path="/" exact element={<Login />} />
          <Route id="register" path="/register" element={<Register />}/>
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );

}

export default App;
