import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBand = () => {

    const [tourDate, setTourDate] = useState("");
    const [venueName, setVenueName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [capacity, setCapacity] = useState("");
    const [venueImage, setVenueImage] = useState("")

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const createTourHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/tour/create", {
            tourDate,
            venueName,
            city,
            state,
            capacity,
            venueImage,
        })
            .then((response) => {
                console.log(response);
                navigate("/tour");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="col-sm-11 col-md-10 col-lg-8 mx-auto">
            <h2 className="my-4 py-4">Create A New Tour Stop</h2>

            <div className="col-12 d-flex justify-content-start">
                <form className="col-12 mt-4 d-flex justify-content-start" onSubmit={createTourHandler}>
                    <div className="col-12 form-group text-start mt-4">
                        <div>
                        <label className="mb-2" htmlFor="tourDate">Date</label>
                        <input type="date" className="form-control mb-2" onChange={(e) => setTourDate(e.target.value)} value={tourDate} />
                        {errors.tourDate ? <p className="text-danger mt-2">{errors.tourDate.message}</p> : null}
                        </div>
                        <div>
                        <label className="mb-2" htmlFor="venueName">Venue Name</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setVenueName(e.target.value)} value={venueName} />
                        {errors.venueName ? <p className="text-danger mt-2">{errors.venueName.message}</p> : null}
                        </div>
                        <div>
                        <label className="mb-2" htmlFor="venueImage">Venue Image</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setVenueImage(e.target.value)} value={venueImage} />
                        {errors.venueImage ? <p className="text-danger mt-2">{errors.venueName.message}</p> : null}
                        </div>
                        <div>
                        <label className="mb-2" htmlFor="city">City</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setCity(e.target.value)} value={city} />
                        {errors.city ? <p className="text-danger mt-2">{errors.city.message}</p> : null}
                        </div>
                        <div>
                        <label className="mb-2" htmlFor="state">State</label>
                        <div>
                        <select name='city' value={city} defaultValue="Select State" onChange={(e) => setState(e.target.value)}>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                           <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                        </select>
                        </div>
                        <div>
                        {errors.state ? <p className="text-danger mt-2">{errors.state.message}</p> : null}
                        </div>
                        </div>
                        <div>
                        <label className="mb-2" htmlFor="capacity">Capacity</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setCapacity(e.target.value)} value={capacity} />
                        {errors.capacity ? <p className="text-danger mt-2">{errors.capacity.message}</p> : null}
                        </div>
                    <button className="btn btn-primary btn-lg btn-block my-4" type="submit">Submit</button>
                    </div>
                    <div>
                    </div>
                </form>
            </div>
            <Link className="my-4 mx-2 d-flex justify-content-center" to={"/"}><button className="btn btn-secondary">Cancel</button></Link>
        </div>
    )
}

export default CreateBand;