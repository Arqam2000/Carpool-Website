import "./CarPage.css"
import car from "./car-1.png"
import user from "./Removal-658.png"

function CarPage() {

    return(
        <>
        <div className="main1">
        <div className="main2">
            <div className="carimg"><img src={car} alt="" />
            </div>
            <div className="carmodel">
              <h2>carmodel / carname</h2>
            </div>
            <div className="details">
                <div className="route">
                    <p>Going From:</p>
                    <p className="to1">data</p>
                    <p>To:</p>
                    <p className="to1">data</p>
                </div>
                <div className="route">
                    <p>Departure:</p>
                    <p className="to1">data</p>
                    <p>Return:</p>
                    <p className="to1">data</p>
                </div>
                <div className="route">
                    <p>Trip:</p>
                    <p className="to1">data</p>
                    <p>Seats Available:</p>
                    <p className="to1">data</p>
                </div>
                <div className="route">
                <p>Days A Week:</p>
                    <p className="to1">data</p>
                </div>
                <div className="route">
                <p>Price Per Seat:</p>
                    <p className="to1">data</p>
                </div>
                <div className="route2">
                <p>Discription:</p>
                    <p className="to2">data Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita eos ex ducimus at nemo reiciendis, fugit ea earum iure asperiores perspiciatis illo ab quidem facere labore iste vel est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam consectetur, ad vel enim ipsam sapiente ratione qui possimus nam id provident officiis voluptate eaque, nulla itaque aliquid et placeat quo.</p>
                </div>
                </div>
            <div className="ownerdetails">
                <h2>Owners Contact Details:</h2>
                <div className="user">
                    <img src={user} alt="" className="userpic" />
                    <p>user name</p>
                </div>
                <div className="usercontact">
                    <p>Phone Number:</p>
                    <p className="to4">Data</p>
                    <p >Email:</p>
                    <p className="to5">Data</p>
                </div>
            </div>


            </div>
             </div>
        </>
    )
}
export default CarPage;