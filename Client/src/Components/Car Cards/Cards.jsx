import "./Cards.css"
import car from "./car-1.png"

function Cards(){

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
            <p className="ot">Corolla</p>
            </div>
        </div>
    </div>
    </div>

    
    
    </>
)
}

export default Cards; 