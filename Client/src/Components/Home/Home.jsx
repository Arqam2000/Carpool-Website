import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";

function Home() {
  const [click, setClick] = useState("ex");
  const navigate = useNavigate()
  if (!click) {
    navigate("/cardetailsmain")
  }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      navigate("/login")
    }
  })
  return (
    <>
      <div className="Navbar">
        <Navbar2 />
      </div>
      <br />
      <br />
      <br />
      <div>
        <button onClick={() => setClick(null)}>Home</button>
      </div>
    </>
  );
}

export default Home;