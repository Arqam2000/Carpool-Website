import "./CarPage.css"
import car from "./car-1.png"
import userImg from "./Removal-658.png"
import {useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

function CarPage() {
    const [user, setUser] = useState()
    const location = useLocation();
    // console.log(location.state)

    const authAxios = axios.create({
        baseURL: "http://localhost:3001/getUser",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
    })
    useEffect(()=>{
        authAxios.get(`http://localhost:3001/user/${location.state.user_id}`)
        .then(user => setUser(user.data))
        .catch(err => console.log(err))
    }, [])
    
    return(
        <>
        <div className="main1">
        <div className="main2">
            <div className="carimg"><img src={`http://localhost:3001/${location.state.img}`} alt="" />
            </div>
            <div className="carmodel">
              <h2>{`${location.state.carModel} / ${location.state.carName} `}</h2>
            </div>
            <div className="details">
                <div className="route">
                    <p>Going From:</p>
                    <p className="to1">{location.state.startPoint}</p>
                    <p>To:</p>
                    <p className="to1">{location.state.destPoint}</p>
                </div>
                <div className="route">
                    <p>Departure:</p>
                    <p className="to1">{location.state.goingTime}</p>
                    <p>Return:</p>
                    <p className="to1">{location.state.goingTime}</p>
                </div>
                <div className="route">
                    <p>Trip:</p>
                    <p className="to1">{location.state.trip}</p>
                    <p>Seats Available:</p>
                    <p className="to1">{location.state.sittCap}</p>
                </div>
                <div className="route">
                <p>Days A Week:</p>
                    <p className="to1">{location.state.days}</p>
                </div>
                <div className="route">
                <p>Price Per Seat:</p>
                    <p className="to1">{location.state.price}</p>
                </div>
                <div className="route2">
                <p>Discription:</p>
                    <p className="to2">{location.state.desc}</p>
                </div>
                </div>
            <div className="ownerdetails">
                <h2>Owners Contact Details:</h2>
                <div className="user">
                    <img src={userImg} alt="" className="userpic" />
                    <p>{user && `${user.f_name} ${user.l_name}`}</p>
                </div>
                <div className="usercontact">
                    <p>Phone Number:</p>
                    <p className="to4">{user && `${user.phone}`}</p>
                    <p >Email:</p>
                    <p className="to5">{user && `${user.email}`}</p>
                </div>
            </div>


            </div>
             </div>
        </>
    )
}
export default CarPage;