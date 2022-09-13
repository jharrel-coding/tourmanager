import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Band.css';

const CreateBand = () => {

    const [bandName, setBandName] = useState("");
    const [singer, setSinger] = useState("");
    const [guitarist, setGuitarist] = useState("");
    const [bass, setBass] = useState("");
    const [drummer, setDrummer] = useState("");
    const [hometown, setHometown] = useState("");
    const [bandImage, setBandImage] = useState("");
    const [description, setDescription] = useState("");
    const [photo1, setPhoto1] = useState("");
    const [photo2, setPhoto2] = useState("");
    const [photo3, setPhoto3] = useState("");
    const [photo4, setPhoto4] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const createBandHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/band/create", {
            bandName,
            singer,
            guitarist,
            bass,
            drummer,
            hometown,
            bandImage,
            description,
            photo1,
            photo2,
            photo3,
            photo4,
        })
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="col-sm-11 col-md-10 col-lg-8 mx-auto">
            <h2 className="my-4 py-4 band-text">Create A New Band</h2>

            <div className="col-12 d-flex justify-content-start">
                <form className="col-12 d-flex justify-content-start form-styles" onSubmit={createBandHandler}>
                    <div className="col-12 form-group text-start">
                        <div>
                            <label className="mb-2" htmlFor="bandName">Band Name</label>
                            <input type="text" className="form-control mb-2" onChange={(e) => setBandName(e.target.value)} value={bandName} />
                            {errors.bandName ? <p className="text-danger mt-2">{errors.bandName.message}</p> : null}
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="bandImage">Band Image</label>
                            <input type="text" className="form-control mb-2" onChange={(e) => setBandImage(e.target.value)} value={bandImage} />
                            {errors.bandImage ? <p className="text-danger mt-2">{errors.bandImage.message}</p> : null}
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="singer">Singer</label>
                            <input type="text" className="form-control mb-2" onChange={(e) => setSinger(e.target.value)} value={singer} />
                            {errors.singer ? <p className="text-danger mt-2">{errors.singer.message}</p> : null}
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="guitarist">Guitarist</label>
                            <input type="text" className="form-control mb-2" onChange={(e) => setGuitarist(e.target.value)} value={guitarist} />
                            {errors.guitarist ? <p className="text-danger mt-2">{errors.guitarist.message}</p> : null}
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="bass">Bassist</label>
                            <input type="text" className="form-control mb-2" onChange={(e) => setBass(e.target.value)} value={bass} />
                            {errors.bass ? <p className="text-danger mt-2">{errors.bass.message}</p> : null}
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="drummer">Drummer</label>
                            <input type="text" className="form-control mb-2" onChange={(e) => setDrummer(e.target.value)} value={drummer} />
                            {errors.drummer ? <p className="text-danger mt-2">{errors.drummer.message}</p> : null}
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="hometown">Hometown</label>
                            <input type="text" className="form-control mb-2" onChange={(e) => setHometown(e.target.value)} value={hometown} />
                            {errors.hometown ? <p className="text-danger mt-2">{errors.hometown.message}</p> : null}
                        </div>
                        <div>
                            <label className="mb-2" htmlFor="description">Description</label>
                            <textarea type="text" className="form-control mb-2" onChange={(e) => setDescription(e.target.value)} value={description} />
                            {errors.description ? <p className="text-danger mt-2">{errors.description.message}</p> : null}
                        </div>

                    <div>
                        <button className="btn btn-primary btn-lg btn-block my-4" type="submit">Submit</button>
                    </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreateBand;