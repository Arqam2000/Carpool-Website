import { useState } from "react";
import "./CarDetailsMain.css";
import { Navigate } from "react-router";
import car from "../assets/car-1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CarForm from "./CarForm";

function CarDetailsMain() {
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
      <div className="Mtext-con">
        <h1 className="Text-1">Enter Your Car Details And</h1>
        <h1 className="Text-2">
          And Enjoy with Your New <span className="sp">K</span>arpool Partner
        </h1>
      </div>
      <div>
        <img src={car} alt="" className="car" />
      </div>
      <div className="car-form">
        <CarForm />
      </div>
    </>
  );
}
export default CarDetailsMain;
