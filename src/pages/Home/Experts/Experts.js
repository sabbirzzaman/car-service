import React from 'react';
import Expert from '../Expert/Expert';
import img1 from '../../../images/experts/expert-1.jpg';
import img2 from '../../../images/experts/expert-2.jpg';
import img3 from '../../../images/experts/expert-3.jpg';
import img4 from '../../../images/experts/expert-4.jpg';
import img5 from '../../../images/experts/expert-5.jpg';
import img6 from '../../../images/experts/expert-6.png';

const Experts = () => {
    const experts = [
        { id: 1, img: img1, name: 'Kenneth Medina' },
        { id: 2, img: img2, name: 'Micheal Gibson' },
        { id: 3, img: img3, name: 'Bobby Kennedy' },
        { id: 4, img: img4, name: 'Patrick Kelley' },
        { id: 5, img: img5, name: 'Chester Peters' },
        { id: 6, img: img6, name: 'Riley Payne' },
    ];

    return (
        <div className="bg-white">
            <div className="container py-5">
                <div className="title">
                    <h2>Our Experts</h2>
                </div>
                <div className="row">
                    {experts.map((expert) => (
                        <Expert key={expert.id} expert={expert}></Expert>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experts;
