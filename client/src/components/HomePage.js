import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const AllBands = () => {

    const [allBands, setAllBands] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/band')
            .then((response) => {
                console.log(response.data);
                setAllBands(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    return (
        <div className="col-sm-11 col-md-10 col-lg-8 mx-auto">
            <section>
                <div >
                    <h1 className="band-text">Welcome to Band Manager!</h1>
                </div>
            </section>
            <section>
                <p className='band-text'>A place to manage your bands and schedule their shows throughout their upcoming tours</p>
            </section>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mb-4">
                            <div class="card">
                                <img class="card-img-top" src="https://images.squarespace-cdn.com/content/v1/54749e9be4b035ef76f778db/1484283328112-3P2S80V9ENHG0H1ZC71U/13392287_10154392105704994_6866786710512974494_o.jpg?format=300w" 
                                alt="Band On Stage" />

                                <div class="card-body">
                                    <h5 class="card-title">Create A New Band</h5>
                                    <p class="card-text">
                                        Enter a new band to your roster. Keep track of the bands name, hometown, members and much more.

                                    </p>

                                    <a href="/band/new" class="btn btn-outline-primary btn-sm leftButton">
                                        Enter A New Band
                                    </a>
                                    <a href="/band" class="btn btn-outline-primary btn-sm">
                                        View Band Roster
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card">
                                <img 
                                    class="card-img-top" 
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Nj_06_band.jpg" 
                                    alt="" 
                                />

                                <div class="card-body">
                                    <h5 class="card-title">schedule A New Show</h5>
                                    <p class="card-text">
                                        Bands need to tour and fans need to see their favorite artists. Schedule a new show here.
                                    </p>

                                    <a href="/tour/new" class="btn btn-outline-primary btn-sm leftButton">
                                        Schedule A New Show
                                    </a>
                                    <a href="/tour" class="btn btn-outline-primary btn-sm">
                                        View Upcoming Shows
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllBands;