import "./Cards.css"
import carImg from "./car-1.png"
import axios from "axios"
import { useEffect, useState } from "react"

function Cards({car}) {

    return (
        <>
            <div className="parent">
                <div className="main-card">
                    <div className="imgd">
                        <img src={carImg} alt="" />
                    </div>
                    <div className="text-1">
                        <div style={{ display: "flex" }}>
                            <p>Car Name: </p>
                            <p className="ot">{car.carName}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p>Car Model: </p>
                            <p>{car.carModel}</p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Cards; 