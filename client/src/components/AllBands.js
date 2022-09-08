import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            <h2 className="my-4 py-4">Band Dashboard</h2>
            <div className="col-12 d-flex justify-content-between my-4 align-items-center">
                <div className="d-flex justify-content-start col-4">
                    <Link to={"/new"}>
                        <button className="btn btn-dark">See All Bands</button>
                    </Link>
                </div>
                <div className="d-flex justify-content-end col-8">
                    <Link to={"/new"}>
                        <button className="btn btn-dark mx-2">User Profile</button>
                    </Link>
                    <Link to={"/new"}>
                        <button className="btn btn-success">New Band</button>
                    </Link>
                </div>
            </div>
            <div className="card p-2">
                <table className="col-12 mx-auto table table-hover text-start mt-4">
                    <thead className="col-12">
                        <tr className="text-start col-12">
                            <th className="col-3">Band Name</th>
                            <th className="col-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody  className="col-12">
                        {allBands
                        // Sort the ads by type - alphabetically
                        .sort((a, b) => {
                            if (a.bandName.toLowerCase() < b.bandName.toLowerCase()) return -1;
                            if (a.bandName.toLowerCase() > b.bandName.toLowerCase()) return 1;
                            return 0;
                        })
                        .map((band, index) => {
                            return (
                                <tr className="text-start col-12" key={band._id}>
                                    <td className="col-3"><a href={`${band._id}`}>{band.bandName}</a></td>
                                    <td className="col-4">
                                        <Link to={`/${band._id}`}>
                                            <button className="btn btn-primary mx-1">Details</button>
                                        </Link>
                                        <Link to={`/${band._id}/update`}>
                                            <button className="btn btn-warning mx-1">Update</button>
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

export default AllBands;