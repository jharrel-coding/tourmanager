import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as dayjs from 'dayjs'

const TourDetails = (props) => {

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

    const dayjs = require('dayjs');

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
                setCapacity(response.data.capacity);
            })
            .catch((err) => {
                console.log(err.response);
                setTourNotFoundError(`Tour not found using that ID`);
            });
    }, []);

    const handleDeleteTour = (id) => {
        axios.delete(`http://localhost:8000/api/tour/${id}`)
            .then((response) => {
                console.log("Tour Deleted");
                console.log(response);
                navigate("/tour");
            })
            .catch((err) => {
                console.log("Error Deleting Tour", err.response);
            });
    };

    return (
        <div className="col-sm-11 col-md-10 col-lg-8 mx-auto">


            {tourNotFoundError ? (
                <h2>
                    {tourNotFoundError} <Link to="/"><p className="text-primary">Click here to go back</p></Link>
                </h2>
            ) :
                <div className="col-12 d-flex justify-content-between my-4 align-items-center">
                    <div className="col-12 text-start mt-4">
                        <h1>{venueName} - {tourDate} </h1>
                        <img src={venueImage} className="img-fluid" height="300px" width="500px" alt="Responsiveimage" />
                        <hr />
                        <h4>{city}, {state}</h4>
                        <h4>Capacity: {capacity}</h4>
                        <div className="col-6 text-start mt-4">
                            <Link to={`/tour/${id}/update`}>
                                <button className="btn btn-warning me-2">Update</button>
                            </Link>
                            <button className="btn btn-danger me-2" onClick={() => handleDeleteTour(id)}>Delete</button>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default TourDetails;