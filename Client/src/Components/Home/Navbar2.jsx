import "./Navbar2.css";
import { useState, useRef} from "react";
import { Navigate } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar2() {
  const [click, setClick] = useState("ex");
  const [click2, setClick2] = useState("bw");
  const [click3, setClick3] = useState("pr");

  const navRef = useRef();

  const showNavbar = () => {
      navRef.current.classList.toggle(
          "responsive_nav2"
      );
  };

  if (!click) {
    localStorage.removeItem("token")
    return <Navigate to="/" />;
  }
  if (!click2) {
    return <Navigate to="/about" />;
  }
  if (!click3) {
    return <Navigate to="/profile" />
  }

  return (
    <>
      <div className="nav2-container">
        <div className="nav2-header">
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
        <div className="nav-tags" ref={navRef}>
          <p
            onClick={() => {
              setClick3(null)
            }}
          >My Profile</p>
          <p
            onClick={() => {
              setClick2(null);
            }}
          >
            About Us
          </p>
          <button
            className="logout-btn"
            onClick={() => {
              setClick(null);
            }}
            >
            Log Out
          </button>
          <button
            className="nav2-btn nav2-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button
          className="nav2-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
            </div>
      </div>
    </>
  );
}
export default Navbar2;
