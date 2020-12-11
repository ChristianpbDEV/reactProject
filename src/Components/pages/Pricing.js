import React from 'react';

import { Link } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
    return (
        <>
            <div className="body2">
                <div className="container">
                    <div className="flex">
                        <div className="price-box">
                            <h3><strong>PRICING</strong></h3>                    
                            <ul>
                                <li>Regular Haircut $30</li>
                                <li>Style Cut $32</li>
                                <li>Senior Discount $2 OFF</li>
                                <li>Design $ Price Varies</li>
                                <li>Beard Trim $10</li>
                                <li>Hot Lather Shave $35</li>
                            </ul>
                            <button>Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;