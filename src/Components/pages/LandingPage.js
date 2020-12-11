import React from 'react';
import { Row, Col } from 'reactstrap'
import './LandingPage.css';

function LandingPage() {
    return (
        <>
            <div className="body_LP">
                <div className="container_LandingPage container">
                    <Row className="row_LP row">
                        <Col className="col col-6-md">
                            <div className="text-wrapper">
                                <p className="landingPage_Heading">
                                    Welcome to 
                                </p>
                                <p className="landingPage_Heading">
                                    PROCUTS Barbershop
                                </p>    
                                <p>
                                    Serving the Community for 20 Years
                                </p>
                                <button className="Book">
                                    Book Today
                                </button>
                            </div>
                            <Col className="col col-6-md">
                                <div className="img-wrapper">
                                    <img src="/assets/images/BarberTools.jpg" className="bg2"/>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default LandingPage;