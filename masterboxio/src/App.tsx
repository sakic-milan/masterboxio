import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./components/Test";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <div className="App">
      Hello masterboxio
      <Test />
      <Login />
    </div>
  );
};

export default App;
