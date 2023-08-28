import "./Cards.css"
import { useState } from "react"
import { useNavigate } from 'react-router'

function Cards({ car }) {

    const [click, setClick] = useState("ko")
    const navigate = useNavigate()
    if (!click) {
        navigate('/carpage', { state: car })
    }

    return (
        <>
            <div className="parent">
                <div className="main-card">
                    <div className="imgd">
                        <img src={`http://localhost:3001/${car.img}`} alt="" />
                    </div>
                    <div className="card-detail-section">
                        <div className='card-details'>
                            <h3 style={{ paddingRight: '10px', color: 'rgb(255,208,0)' }}>Route:</h3>
                            <h3>From:</h3>
                            <h3 className="data">{car.startPoint}</h3>
                            <h3 style={{ paddingLeft: '91px' }}>To:</h3>
                            <h3 className="data">{car.destPoint}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Departure Time:</h3>
                            <h3 className="data">{car.goingTime}</h3>
                            <h3 style={{ paddingLeft: '80px' }}>Approx. Time For Arrival:</h3>
                            <h3 className="data">{car.returnTime}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Seats Available:</h3>
                            <h3 className="data">{car.sittCap}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Trip: </h3>
                            <h3 className="data">{car.trip}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Price Per Seat: </h3>
                            <h3 className="data" style={{ color: '#118c4f' }}>Rs.{car.price}</h3>
                        </div>
                        <div className="more-details-btn">
                            <button className='book-btn' onClick={() => setClick(null)}>Book Your Ride</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Cards; 