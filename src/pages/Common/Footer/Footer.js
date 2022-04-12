import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();

    return (
        <div className='text-center py-5 bg-light'>
            Copyright @ {year}
        </div>
    );
};

export default Footer;