import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BandDetails = (props) => {

    const { id } = useParams();
    console.log(id);

    const [bandName, setBandName] = useState("");
    const [singer, setSinger] = useState("");
    const [guitarist, setGuitarist] = useState("");
    const [bass, setBass] = useState("");
    const [drummer, setDrummer] = useState("");
    const [secondGuitarist, setSecondGuitarist] = useState("");
    const [thirdGuitarist, setThirdGuitarist] = useState("");
    const [hometown, setHometown] = useState("");

    const navigate = useNavigate();

    const [bandNotFoundError, setBandNotFoundError] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/band/${id}`)
            .then((response) => {
                console.log(response.data);
                setBandName(response.data.bandName);
                setSinger(response.data.singer);
                setGuitarist(response.data.guitarist);
                setBass(response.data.bass);
                setDrummer(response.data.drummer);
                setSecondGuitarist(response.data.secondGuitarist);
                setThirdGuitarist(response.data.thirdGuitarist);
                setHometown(response.data.hometown);
            })
            .catch((err) => {
                console.log(err.response);
                setBandNotFoundError(`Band not found using that ID`);
            });
    }, []);

    const handleDeleteBand = (id) => {
        axios.delete(`http://localhost:8000/api/band/${id}`)
            .then((response) => {
                console.log("Band Deleted");
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log("Error Deleting Band", err.response);
            });
    };

    return (
        <div className="col-sm-11 col-md-10 col-lg-8 mx-auto">
            <h2 className="my-4 py-4">{bandName} Details</h2>
            <div className="col-12 d-flex justify-content-between my-4 align-items-center">
                <div className="d-flex justify-content-start col-4">
                    <Link to={"/"}>
                        <button className="btn btn-dark">See All Bands</button>
                    </Link>
                </div>
                <div className="d-flex justify-content-end col-8">
                    <Link to={"/new"}>
                        <button className="btn btn-dark mx-2">User Profile</button>
                    </Link>
                </div>
            </div>
            {bandNotFoundError ? (
                <h2>
                    {bandNotFoundError} <Link to="/"><p className="text-primary">Click here to go back</p></Link>
                </h2>
            ) :
            <div className="col-12 d-flex justify-content-start">
                <div className="col-6 text-start mt-4">
                    <h5>Band Name</h5>
                    <p>{bandName}</p>
                    <h5 className="mt-4">Singer</h5>
                    <p>{singer}</p>
                    <h5 className="mt-4">Guitarist</h5>
                    <p>{guitarist}</p>
                    <h5 className="mt-4">Bassist</h5>
                    <p>{bass}</p> 
                    <h5 className="mt-4">Drummer</h5>
                    <p>{drummer}</p> 
                    <h5 className="mt-4">Second Guitarist</h5>
                    <p>{secondGuitarist}</p> 
                    <h5 className="mt-4">Third Guitarist</h5>
                    <p>{thirdGuitarist}</p> 
                    <h5 className="mt-4">Home Town</h5>
                    <p>{hometown}</p> 
                </div>
                
                    <div className="mt-4 col-12 d-flex justify-content-start">
                        <Link to={`/${id}/update`}>
                            <button className="btn btn-warning me-2">Update</button>
                        </Link>
                        <button className="btn btn-danger me-2" onClick={() => handleDeleteBand(id)}>Delete</button>
                    </div>
            </div>
            }
            <Link className="my-4 mx-2 d-flex justify-content-end" to={"/"}><button className="btn btn-secondary">Back</button></Link>
        </div>
    )
}

export default BandDetails;