import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BandDetails = (props) => {

    const { id } = useParams();
    console.log(id);

    const [bandName, setBandName] = useState("");
    const [bandImage, setBandImage] = useState("");
    const [singer, setSinger] = useState("");
    const [guitarist, setGuitarist] = useState("");
    const [bass, setBass] = useState("");
    const [drummer, setDrummer] = useState("");
    const [hometown, setHometown] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const [bandNotFoundError, setBandNotFoundError] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/band/${id}`)
            .then((response) => {
                console.log(response.data);
                setBandName(response.data.bandName);
                setBandImage(response.data.bandImage);
                setSinger(response.data.singer);
                setGuitarist(response.data.guitarist);
                setBass(response.data.bass);
                setDrummer(response.data.drummer);
                setHometown(response.data.hometown);
                setDescription(response.data.description);
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

            {bandNotFoundError ? (
                <h2>
                    {bandNotFoundError} <Link to="/"><p className="text-primary">Click here to go back</p></Link>
                </h2>
            ) :
            <div className="col-12 d-flex justify-content-between my-4 align-items-center">
                <div className="col-12 text-start mt-4">
                <img src={bandImage} className="img-fluid" alt="Responsiveimage"/>
                <h2 className="my-4 py-4">{bandName}</h2>
                    <h4>Singer: {singer} // Guitarist: {guitarist} // Bassist: {bass} // Drummer: {drummer}</h4>
                    <h5>Hometown: {hometown}</h5>
                    <hr/>
                    {description}
                    <div className="col-6 text-start mt-4">
                        <Link to={`/${id}/update`}>
                            <button className="btn btn-warning me-2">Update</button>
                        </Link>
                        <button className="btn btn-danger me-2" onClick={() => handleDeleteBand(id)}>Delete</button>
                    </div>

                </div>
            </div>
            }
        </div>
    )
}

export default BandDetails;