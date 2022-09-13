import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBand = (props) => {

    const { id } = useParams();
    console.log(id);

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
                setHometown(response.data.hometown);
                setBandImage(response.data.bandImage);
                setDescription(response.data.description);
                setPhoto1(response.data.photo1);
                setPhoto2(response.data.photo2);
                setPhoto3(response.data.photo3);
                setPhoto4(response.data.photo4);
            })
            .catch((err) => {
                console.log(err.response);
                setBandNotFoundError(`Ad not found using that ID`);
            });
    }, []);

    const updateBandHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/band/${id}`, { 
            bandName,
            singer,
            guitarist,
            bass,
            drummer,
            bandImage,
            hometown,
            description,
            photo1,
            photo2,
            photo3,
            photo4,
        })
            .then((response) => {
                console.log(response);
                navigate(`/${id}`);
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return (
        <div className="col-sm-11 col-md-10 col-lg-8 mx-auto">
            <h2 className="my-4 py-4">Update {bandName}</h2>
            <div className="col-12 d-flex justify-content-between my-4 align-items-center">
                <div className="d-flex justify-content-start col-4">
                </div>
                <div className="d-flex justify-content-end col-8">
                    {/* <Link to={"/new"}>
                        <button className="btn btn-dark mx-2">User Profile</button>
                    </Link> */}
                    {/* <Link to={"/new"}>
                        <button className="btn btn-success">New Campaign</button>
                    </Link> */}
                </div>
            </div>
            {bandNotFoundError ? (
                <h2>
                    {bandNotFoundError} <Link to="/dashboard"><p className="text-primary">Click here to go back</p></Link>
                </h2>
            ) :
            <div className="col-12 d-flex justify-content-start">
                <form className="col-12 mt-4 d-flex justify-content-start" onSubmit={updateBandHandler}>
                    <div className="col-5 form-group text-start mt-4">
                        <label className="mb-2" htmlFor="bandName">Band Name</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setBandName(e.target.value)} value={bandName} />
                        {errors.bandName ? <p className="text-danger mt-2">{errors.bandName.message}</p> : null}

                        <label className="mb-2" htmlFor="bandImage">Band Image</label>
                        <input type="text" className="form-control mb-2" onChange={(e) => setBandImage(e.target.value)} value={bandImage} />
                        {errors.bandImage ? <p className="text-danger mt-2">{errors.bandImage.message}</p> : null}

                        <label className="mb-2" htmlFor="description">Description</label>
                        <textarea type="text" className="form-control mb-10" onChange={(e) => setDescription(e.target.value)} value={description} />
                        {errors.description ? <p className="text-danger mt-2">{errors.description.message}</p> : null}

                    </div>

                    <div className="col-1"></div>

                    <div className="col-5 form-group text-start mt-4">
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

                        <button className="btn btn-primary my-4" type="submit">Submit</button>
                    </div>

                    <div className="col-1"></div>

                </form>
            </div>
            }
            <Link className="my-4 mx-2 d-flex justify-content-end" to={"/"}><button className="btn btn-secondary">Cancel</button></Link>
        </div>
    )
}

export default UpdateBand;