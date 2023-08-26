import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import "./Home.css"
import plus from "./Images/Plus.png"



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
      
      
      
      <div>
        <img src={plus} alt="" className="plus" onClick={() => setClick(null)}/>
      </div>
   
    </>
  );
}

export default Home;