import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBand = () => {

    const [bandName, setBandName] = useState("");
    const [singer, setSinger] = useState("");
    const [guitarist, setGuitarist] = useState("");
    const [bass, setBass] = useState("");
    const [drummer, setDrummer] = useState("");
    const [secondGuitarist, setSecondGuitarist] = useState("");
    const [thirdGuitarist, setThirdGuitarist] = useState("");
    const [hometown, setHometown] = useState("");

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
            secondGuitarist,
            thirdGuitarist,
            hometown,
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
            <h2 className="my-4 py-4">Create New Band</h2>
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
                <form className="col-12 mt-4 d-flex justify-content-start" onSubmit={createBandHandler}>
                    <div className="col-5 form-group text-start mt-4">
                        <label className="mb-2" htmlFor="bandName">Band Name</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setBandName(e.target.value)} value={bandName} />
                        {errors.bandName ? <p className="text-danger mt-2">{errors.bandName.message}</p> : null}

                        <label className="mb-2" htmlFor="singer">Singer</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setSinger(e.target.value)} value={singer} />
                        {errors.singer ? <p className="text-danger mt-2">{errors.singer.message}</p> : null}

                        <label className="mb-2" htmlFor="guitarist">Guitarist</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setGuitarist(e.target.value)} value={guitarist} />
                        {errors.guitarist ? <p className="text-danger mt-2">{errors.guitarist.message}</p> : null}

                        <label className="mb-2" htmlFor="bass">Bassist</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setBass(e.target.value)} value={bass} />
                        {errors.bass ? <p className="text-danger mt-2">{errors.bass.message}</p> : null}

                        <label className="mb-2" htmlFor="drummer">Drummer</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setDrummer(e.target.value)} value={drummer} />
                        {errors.drummer ? <p className="text-danger mt-2">{errors.drummer.message}</p> : null}

                        <label className="mb-2" htmlFor="secondGuitarist">Second Guitarist</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setSecondGuitarist(e.target.value)} value={secondGuitarist} />
                        {errors.secondGuitarist ? <p className="text-danger mt-2">{errors.secondGuitarist.message}</p> : null}

                        <label className="mb-2" htmlFor="thirdGuitarist">Third Guitarist</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setThirdGuitarist(e.target.value)} value={thirdGuitarist} />
                        {errors.thirdGuitarist ? <p className="text-danger mt-2">{errors.thirdGuitarist.message}</p> : null}

                        <label className="mb-2" htmlFor="hometown">Hometown</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setHometown(e.target.value)} value={hometown} />
                        {errors.hometown ? <p className="text-danger mt-2">{errors.hometown.message}</p> : null}
                    </div>
                    
                    <button className="btn btn-primary my-4" type="submit">Submit</button>

                </form>
            </div>
            <Link className="my-4 mx-2 d-flex justify-content-end" to={"/"}><button className="btn btn-secondary">Cancel</button></Link>
        </div>
    )
}

export default CreateBand;