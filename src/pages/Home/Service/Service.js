import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;

    const navigate = useNavigate();

    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 g-4">
            <div className="card">
                <img src={img} className="card-img-top w-100" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={() => navigate(`/service/${id}`)} className="btn btn-primary">
                        Service Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;
