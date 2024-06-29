import React from "react";
import { useState } from "react";

const listNamaUser = ["sanjaya", "doyok", "dodi", "aprilla"];
function App() {
  const [nameUser, setNameUser] = useState("Broday");
  const [listDataUser, setListDataUser] = useState(listNamaUser);

  return (
    <>
      <h1>Hello, This React + GIT Remote</h1>
      <h1>{nameUser}</h1>
      <ul>
        {listDataUser.map((userNamee, index) => (
          <li key={index}>
            <a href="#">{userNamee}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
