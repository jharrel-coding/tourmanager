import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateTour = (props) => {

    const { id } = useParams();
    console.log(id);

    const [tourDate, setTourDate] = useState("");
    const [venueName, setVenueName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [capacity, setCapacity] = useState("");
    const [venueImage, setVenueImage] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const [tourNotFoundError, setTourNotFoundError] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/tour/${id}`)
            .then((response) => {
                console.log(response.data);
                setTourDate(response.data.tourDate);
                setVenueName(response.data.venueName);
                setCity(response.data.city);
                setState(response.data.state);
                setCapacity(response.data.capacity);
                setVenueImage(response.data.venueImage);
            })
            .catch((err) => {
                console.log(err.response);
                setTourNotFoundError(`Ad not found using that ID`);
            });
    }, []);

    const updateTourHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/tour/${id}`, { 
            tourDate,
            venueName,
            city,
            state,
            capacity,
            venueImage,
        })
            .then((response) => {
                console.log(response);
                navigate(`/tour/${id}`);
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="col-sm-11 col-md-10 col-lg-8 mx-auto">
            <h2 className="my-4">Update Tour</h2>
            {tourNotFoundError ? (
                <h2>
                    {tourNotFoundError} <Link to="/"><p className="text-primary">Click here to go back</p></Link>
                </h2>
            ) :
            <div className="col-12 d-flex justify-content-start">
                <form className="col-12 " onSubmit={updateTourHandler}>
                    <div className="col-10 form-group text-start mt-4">
                        <label className="mb-2" htmlFor="tourDate">Date</label>
                        <input type="date" className="form-control mb-2" onChange={(e) => setTourDate(e.target.value)} value={tourDate} />
                        {errors.tourDate ? <p className="text-danger mt-2">{errors.tourDate.message}</p> : null}

                        <label className="mb-2" htmlFor="venueName">Venue Name</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setVenueName(e.target.value)} value={venueName} />
                        {errors.venueName ? <p className="text-danger mt-2">{errors.venueName.message}</p> : null}

                        <label className="mb-2" htmlFor="venueImage">Venue Image</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setVenueImage(e.target.value)} value={venueImage} />
                        {errors.venueImage ? <p className="text-danger mt-2">{errors.venueImage.message}</p> : null}

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

                    <div className="col-10 form-group text-start mt-4">

                        <button className="btn btn-primary my-4" type="submit">Submit</button>
                    </div>

                </form>
            </div>
            }
        </div>
    )
}

export default UpdateTour;