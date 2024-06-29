import React from "react";
import { useState } from "react";

function App() {
  const [nameUser, setNameUser] = useState("Broday");
  return (
    <>
      <h1>Hello, This React + GIT Remote</h1>
      <h1>{nameUser}</h1>
    </>
  );
}
