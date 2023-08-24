import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar2 from "./Navbar2";

function Home() {
  const [click, setClick] = useState("ex");
  if (!click) {
    return <Navigate to="/cardetailsmain" />;
  }

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
