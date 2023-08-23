import "./CarForm.css";
import car from "../assets/checklist-img.jpg";

function CarForm() {
  return (
    <>
      <div className="h-text">
        <h2 className="h-t">Enter Your Car Details</h2>
      </div>
      <div className="m1">
        <div className="main">
          <form action="">
            <div className="main-details">
              <div className="car-details1">
                <div>
                  <img src={car} alt="" className="img2" />
                </div>
              </div>
              <div className="car-details2">
                <div className="card">
                  <label className="car-model-l"> Car Model:</label>
                  <input
                    type="text"
                    name="car modal"
                    className="cari"
                    placeholder="Enter Your Car Model"
                    required
                  />
                </div>
                <div className="card">
                  <label className="car-name-l"> Car Name:</label>
                  <input
                    type="text"
                    name="Car Name"
                    id="car-name"
                    placeholder="Enter Your Car's Name"
                    className="cari"
                    required
                  />
                </div>
                <div className="card">
                  <label className="sitting"> Sitting Capacity:</label>
                  <select name="" id="" required className="options2">
                    <option value="" disabled selected hidden>
                      Choose Sitting capacity
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="card">
                  <label className="trip">Trip:</label>
                  <select name="trip" id="" required className="options">
                    <option value="" selected disabled hidden>
                      Select Your Trip
                    </option>
                    <option value="OneWay">One-Way</option>
                    <option value="RoundTrip">Round-Trip</option>
                  </select>
                </div>
                <div className="card">
                  <label className="routel"> Route:</label>
                  <input
                    type="text"
                    placeholder="Starting Point"
                    className="inp1"
                    required
                  />
                  To
                  <input
                    type="text"
                    placeholder="Destination"
                    className="inp1"
                    required
                  />
                </div>
                <div className="card">
                  <label className="timel">Time:</label>
                  <input
                    type="time"
                    placeholder="Going Time"
                    className="inp1"
                    required
                  />
                  To
                  <input
                    type="time"
                    placeholder="Return Time"
                    className="inp1"
                    required
                  />
                </div>
                <div className="card">
                  <label className="day">Days A Week</label>
                  <input
                    type="text"
                    className="cari"
                    placeholder="Enter How Many Days"
                    required
                  />
                </div>
                <div className="card">
                  <label className="price">Price Per Seat</label>
                  <input
                    type="number"
                    className="cari"
                    placeholder="Enter Price"
                    required
                  />
                </div>
                <div className="card">
                  <label className="disc">Discription</label>
                  <input
                    type="textarea"
                    placeholder="Enter Discription"
                    className="cari"
                  />
                </div>
                <div className="card">
                  <label className="file">Upload Car Images:</label>
                  <input type="file" className="file1" required />
                </div>
                <div className="btnd">
                  {" "}
                  <button className="btn">Publish</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CarForm;
