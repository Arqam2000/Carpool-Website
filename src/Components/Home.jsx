/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css'
import Navbar from "./Navbar";
import car from '../assets/car-1.png'
import karachi from "../assets/karachi.png";
import islamabad from "../assets/islamabad.jpg";
import lahore from "../assets/lahore.png";

function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <>
      <Navbar />
      <section className='header' id="header">
        <div className="info">
          <h1>Make the most with Karpool'n</h1>
          <h2 data-aos="flip-up" data-aos-duration="1500">Charge for Empty Seats in Your Car & Share Fuel Cost, Reduce Traffic & Global Warming</h2>
          <div className="header-btn">
            <button>Get Started</button>
          </div>
        </div>
      </section>

      <section className="blank-sec">
      </section>
      <section className="about-sec" id="about-sec">
        <div className="about-info" data-aos="fade-right">
          <h1><span>W</span>hat we do<span>?</span></h1>
          <h2>Tired of traffic and high expenses? Say hello to Karpool'n! We're your go-to carpool company, transforming your commute into a shared adventure.
            Split fuel and tolls with your co-riders. Watch your savings soar while you travel. We connect you with friendly folks heading your way. No more lonely drives – share the ride and the fun!</h2>
          <h2>Ready to ditch the solo drive? Hop in with RideShare+ and let's ride toward a brighter, shared future! 🌟</h2>
        </div>
        <div className="about-car">
          <img src={car} alt="" data-aos="fade-right" data-aos-duration="1500" />
        </div>
      </section>

      <section className="cities" id="cities">
        <h1>Cities we operate in:</h1>
      <div class="locations">
        <div class="city-1" data-aos="flip-left" data-aos-duration="1000">
          <img src={karachi} alt="" />
          <div class="layer">
            <h2><span>K</span>ARACHI</h2>
          </div>
        </div>
        <div class="city-2" data-aos="flip-left" data-aos-duration="1000">
          <img src={islamabad} alt="" />
          <div class="layer">
            <h2><span>I</span>SLAMABAD</h2>
          </div>
        </div>
        <div class="city-3" data-aos="flip-left" data-aos-duration="1000">
          <img src={lahore} alt="" />
          <div class="layer">
            <h2><span>L</span>AHORE</h2>
          </div>
        </div>
      </div>
      </section>

      <section className="moto" id="cause">
        <div className="tagline">
          <h1><span id="tag-alph">S</span>hare the Ride, Multiply the Benefits:</h1>
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`Carpool for a Greener, Connected Tomorrow!`)
                  .start()
              }}
            />
          </p>
        </div>
      </section>
    </>
  )
}

export default Home