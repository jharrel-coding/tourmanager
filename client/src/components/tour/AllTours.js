import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Tour.css';

const AllTours = () => {

    const [allTours, setAllTours] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tour')
            .then((response) => {
                console.log(response.data);
                setAllTours(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    return (
        <div className="col-sm-11 col-md-10 col-lg-8 mx-auto">
            <div>
            <h2 className="my-3 py-1 band-text">Show Dashboard</h2>
            <Link to={"/tour/new"}>
                <button className="btn btn-primary">Schedule A New Show</button>
            </Link>
            </div>
            <hr />
            <div className="card p-2">
                <table className="col-12 mx-auto table table-hover text-start mt-4">
                    <thead className="col-12">
                        <tr className="text-start col-12">
                            <th className="col-3">Venue</th>
                            <th className="col-3">City, State</th>
                            <th className="col-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="col-12">
                        {allTours
                            .sort((a, b) => {
                                if (a.venueName.toLowerCase() < b.venueName.toLowerCase()) return -1;
                                if (a.venueName.toLowerCase() > b.venueName.toLowerCase()) return 1;
                                return 0;
                            })
                            .map((tour, index) => {
                                return (
                                    <tr className="text-start col-12" key={tour._id}>
                                        <td className="col-3"><a href={`/tour/${tour._id}`}>{tour.venueName}</a></td>
                                        <td className="col-3">{tour.city}, {tour.state}</td>
                                        <td className="col-4">
                                            <Link to={`/tour/${tour._id}`}>
                                                <button className="btn btn-primary mx-1">Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllTours;