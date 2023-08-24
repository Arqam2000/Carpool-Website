import "./About.css";
import { useState } from "react";
import { Navigate } from "react-router";

function About() {
  const [click, setClick] = useState("ex");
  if (!click) {
    return <Navigate to="/home" />;
  }
  return (
    <>
      <div className="btn-c">
        <button className="btn" onClick={() => setClick(null)}>
          Back To Home
        </button>
      </div>
      <div className="about-main">
        <h1>About Us </h1>
        <p>
          Carpooling is a great way to save money, reduce traffic, and help the
          environment. Our website makes it easy to find carpool partners for
          your daily commute, weekend trips, or long-distance travels.
        </p>
        <ul>
          We offer a variety of features to make carpooling as convenient as
          possible, including:
        </ul>
        <li>
          A user-friendly search engine that allows you to find carpool partners
          based on your route, departure time, and other preferences.
        </li>
        <li
          style={{
            marginLeft: "-60px",
          }}
        >
          A messaging system so you can communicate with potential carpool
          partners before you commit to a ride.
        </li>
        <li
          style={{
            marginLeft: "-140px",
          }}
        >
          The benefits of carpooling, such as saving money, reducing traffic,
          and helping the environment.
        </li>
        <li
          style={{
            marginLeft: "-170px",
          }}
        >
          The features of your website that make it easy to find carpool
          partners and coordinate rides.
        </li>
        <li
          style={{
            marginLeft: "-570px",
          }}
        >
          Your vision for the future of carpooling.
        </li>
      </div>
    </>
  );
}
export default About;
