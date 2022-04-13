import React from 'react';
import img from '../../images/404.png';

const NotFounded = () => {
    return (
        <div className="container py-5 text-center">
            <div className='my-5'>
                <img className="w-25" src={img} alt="page not founded" />
                <h1>Opps! Page Not Founded...</h1>
            </div>
        </div>
    );
};

export default NotFounded;
