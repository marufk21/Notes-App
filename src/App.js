import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Alertt from "./Components/Alertt";
import NoteState from "./Context-API/Notes/noteState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alertt message={" Heyy I am Alert"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </NoteState>
    </>
  );
};

export default App;
