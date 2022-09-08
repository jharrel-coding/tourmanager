import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TourDetails = (props) => {

    const { id } = useParams();
    console.log(id);

    const [tourDate, setTourDate] = useState("");
    const [venueName, setVenueName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [capacity, setCapacity] = useState("");

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
            <h2 className="my-4 py-4">{venueName} Details</h2>
            <div className="col-12 d-flex justify-content-between my-4 align-items-center">
                <div className="d-flex justify-content-start col-4">
                    <Link to={"/tour"}>
                        <button className="btn btn-dark">See All Tours</button>
                    </Link>
                </div>
                <div className="d-flex justify-content-end col-8">
                    <Link to={"/new"}>
                        <button className="btn btn-dark mx-2">User Profile</button>
                    </Link>
                </div>
            </div>
            {tourNotFoundError ? (
                <h2>
                    {tourNotFoundError} <Link to="/tour"><p className="text-primary">Click here to go back</p></Link>
                </h2>
            ) :
            <div className="col-12 d-flex justify-content-start">
                <div className="col-6 text-start mt-4">
                    <h5>Tour Date</h5>
                    <p>{tourDate}</p>
                    <h5 className="mt-4">Venue Name</h5>
                    <p>{venueName}</p>
                    <h5 className="mt-4">City, State</h5>
                    <p>{city}, {state}</p>
                    <h5 className="mt-4">Capacity</h5>
                    <p>{capacity}</p>
                </div>
                
                    <div className="mt-4 col-12 d-flex justify-content-start">
                        <Link to={`/tour/${id}/update`}>
                            <button className="btn btn-warning me-2">Update</button>
                        </Link>
                        <button className="btn btn-danger me-2" onClick={() => handleDeleteTour(id)}>Delete</button>
                    </div>
            </div>
            }
            <Link className="my-4 mx-2 d-flex justify-content-end" to={"/tour"}><button className="btn btn-secondary">Back</button></Link>
        </div>
    )
}

export default TourDetails;