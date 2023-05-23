import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Alert from "./Components/Alert";
import NoteState from "./Context-API/Notes/noteState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="login" element={<Login showAlert={showAlert} />} />
          <Route path="signup" element={<Signup showAlert={showAlert} />} />
        </Routes>
      </NoteState>
    </>
  );
};

export default App;
