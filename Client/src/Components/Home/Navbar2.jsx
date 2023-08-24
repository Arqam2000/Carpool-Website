import "./Navbar2.css";
import { useState } from "react";
import { Navigate } from "react-router";

function Navbar2() {
  const [click, setClick] = useState("ex");
  const [click2, setClick2] = useState("bw");
  if (!click) {
    return <Navigate to="/" />;
  }
  if (!click2) {
    return <Navigate to="/about" />;
  }

  return (
    <>
      <div className="nav-container">
        <h1 className="nav-h1">
          <span
            style={{
              color: "rgb(255, 208, 0)",
              fontSize: "50px",
            }}
          >
            K
          </span>
          <span className="nav-span">arpool'n</span>
        </h1>
        <div className="nav-tags">
          <p>My Profile</p>
          <p
            onClick={() => {
              setClick2(null);
            }}
          >
            About Us
          </p>
          <button
            className="nav-btn"
            onClick={() => {
              setClick(null);
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar2;
