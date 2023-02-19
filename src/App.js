import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";


function App() {
  // if(localStorage.getItem('loginStatus') === "true"){
  //   return(
  //     <Route path="/" element={<Home />} />
  //   );
  // }else{
    
  // }
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
