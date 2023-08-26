import "./Cards.css"
import car from "./car-1.png"
import axios from "axios"
import { useEffect, useState } from "react"

function Cards(){
    const [users, setUsers] = useState([])
    const authAxios = axios.create({
        baseURL: "http://localhost:3001/car-details",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }})
    useEffect(() => {
    
        authAxios.get('http://localhost:3001/car-details')
            .then(users => {
                console.log(users.data)
                setUsers(users.data)
            })
            .catch(err => console.log(err))
    }, [])
return(
    <>
    <div className="parent">
    <div className="main-card">
        <div className="imgd">
      <img src={car} alt="" />
        </div>
        <div className="text-1">
            <div style={{ display:"flex"}}>
            <p>Car Name:</p>
            <p className="ot">{users.map((car)=>car.carName)}</p>
            </div>
            <div>
                <p>Car Model:</p>
                <p>{users.carModel}</p>
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