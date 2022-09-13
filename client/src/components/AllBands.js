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
            <div>
            <h2 className="my-4 py-4">Band Dashboard</h2>
            <Link to={"/new"}>
                <button className="btn btn-primary">New Band</button>
            </Link>
            <Link to={"/tour/new"}>
                <button className="btn btn-info">New Show</button>
            </Link>
            </div>
            <hr/>
            <div className="card p-2">
                <table className="col-12 mx-auto table table-hover text-start mt-4">
                    <thead className="col-12">
                        <tr className="text-start col-12">
                            <th className="col-3">Band Name</th>
                            <th className="col-3">Hometown</th>
                            <th className="col-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="col-12">
                        {allBands
                            // Sort the bands by type - alphabetically
                            .sort((a, b) => {
                                if (a.bandName.toLowerCase() < b.bandName.toLowerCase()) return -1;
                                if (a.bandName.toLowerCase() > b.bandName.toLowerCase()) return 1;
                                return 0;
                            })
                            .map((band, index) => {
                                return (
                                    <tr className="text-start col-12" key={band._id}>
                                        {/* <img height="100px" width="200px" src={band.bandImage} alt="" /> */}
                                        <td className="col-3"><a href={`${band._id}`}>{band.bandName}</a></td>
                                        <td>{band.hometown}</td>
                                        <td className="col-4">
                                            <Link to={`/${band._id}`}>
                                                <button className="btn btn-primary mx-1">View</button>
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