import React from 'react';
import './DetailsModal.css';
import closeBtn from './icons8-cross-60.png';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const DetailsModal = ({car, setModal }) => {

    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <div className="close-btn">
                        <img src={closeBtn} alt="" onClick={() => setModal(false)} />
                    </div>
                    <div className="details-container">
                        <div className="modal-details">
                            <h2>Name: </h2>
                            <h2 className='modal-data'>**Name goes Here**</h2>
                        </div>
                        <div className='modal-details'>
                            <h2>Car Name:</h2>
                            <h2 className="data">{car.carName}</h2>
                            <h2 style={{paddingLeft:'91px'}}>Car Model:</h2>
                            <h2 className="data">{car.carModel}</h2>
                        </div>
                        <div className="modal-details">
                            <h2>Description: </h2>
                            <h2 className='modal-data'>**Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis qui amet dolores labore, similique veritatis quas dolor sapiente repellendus aut eaque reprehenderit et inventore fugit consequatur aliquid corporis dolorum saepe velit recusandae nulla! Voluptates.**</h2>
                        </div>
                        <div className="contact">
                            <h2>Contact: </h2>
                            <div className="contact-details">
                                <button className="email-btn"><FaEnvelope/> **Email goes Here**</button>
                                <button className="phone-btn"><FaPhoneAlt/> **Phone goes Here**</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailsModal