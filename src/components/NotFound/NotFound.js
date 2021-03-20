import React from 'react';
import './NotFound.css'
import notFound from '../../images/notFound.gif'

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={notFound} alt="not found"/>
        </div>
    );
};

export default NotFound;
