import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const [click, setClick] = useState("ex");
  if (!click) {
    return <Navigate to="/cardetailsmain" />;
  }

  return (
    <>
      <div>
        <button onClick={() => setClick(null)}>Home</button>
      </div>
    </>
  );
}

export default Home;
