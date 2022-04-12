import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;

    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 g-4">
            <div className="card">
                <img src={img} className="card-img-top w-100" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href="https://reactjs.org/" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Service;
