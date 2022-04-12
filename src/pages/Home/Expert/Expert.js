import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    
    return (
        <div className="col-lg col-md-4 col-sm-6 col-12 g-4">
            <div className="card">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Expert;
