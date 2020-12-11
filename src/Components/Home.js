import React from 'react';
import BookAppointment from './pages/BookAppointment';
import LandingPage from './pages/LandingPage';
import Pricing from './pages/Pricing';

function Home() {
    return (
        <>
            <LandingPage />
            <BookAppointment  />
            <Pricing />
        </>
    );
}

export default Home;