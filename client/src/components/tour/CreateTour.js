import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBand = () => {

    const [tourDate, setTourDate] = useState("");
    const [venueName, setVenueName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [capacity, setCapacity] = useState("");

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
            <div className="col-12 d-flex justify-content-between my-4 align-items-center">
                <div className="d-flex justify-content-start col-4">
                    <Link to={"/"}>
                        <button className="btn btn-dark">See All Ads</button>
                    </Link>
                </div>
                <div className="d-flex justify-content-end col-8">
                    <Link to={"/new"}>
                        <button className="btn btn-dark mx-2">User Profile</button>
                    </Link>
                </div>
            </div>

            <div className="col-12 d-flex justify-content-start">
                <form className="col-12 mt-4 d-flex justify-content-start" onSubmit={createTourHandler}>
                    <div className="col-5 form-group text-start mt-4">
                        <label className="mb-2" htmlFor="tourDate">Date</label>
                        <input type="date" className="form-control mb-2" onChange={(e) => setTourDate(e.target.value)} value={tourDate} />
                        {errors.tourDate ? <p className="text-danger mt-2">{errors.tourDate.message}</p> : null}

                        <label className="mb-2" htmlFor="venueName">Venue Name</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setVenueName(e.target.value)} value={venueName} />
                        {errors.venueName ? <p className="text-danger mt-2">{errors.venueName.message}</p> : null}

                        <label className="mb-2" htmlFor="city">City</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setCity(e.target.value)} value={city} />
                        {errors.city ? <p className="text-danger mt-2">{errors.city.message}</p> : null}

                        <label className="mb-2" htmlFor="state">State</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setState(e.target.value)} value={state} />
                        {errors.state ? <p className="text-danger mt-2">{errors.state.message}</p> : null}

                        <label className="mb-2" htmlFor="capacity">Capacity</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setCapacity(e.target.value)} value={capacity} />
                        {errors.capacity ? <p className="text-danger mt-2">{errors.capacity.message}</p> : null}
                    </div>
                    
                    <button className="btn btn-primary my-4" type="submit">Submit</button>

                </form>
            </div>
            <Link className="my-4 mx-2 d-flex justify-content-end" to={"/"}><button className="btn btn-secondary">Cancel</button></Link>
        </div>
    )
}

export default CreateBand;