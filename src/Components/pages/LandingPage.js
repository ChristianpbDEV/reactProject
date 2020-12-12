import React from 'react';
import { Row, Col } from 'reactstrap'
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components'


function LandingPage() {
    return (
        <>
            <div className="body_LP">
                <div className="container_LandingPage container">
                    <Row className="row row_LP">
                        <Col className="col-6">
                            <FadeTransform
                                in
                                transformProps={{
                                    enterTransform: 'translateX(100px)',
                                    exitTransform: 'translateX(-100px)'
                                }}>
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
                                        <Link to='/bookappointment' >
                                            Book Today
                                        </Link>
                                    </button>
                                </div>  
                            </FadeTransform>
                        </Col>
                        <Row>
                            <Col className="col">
                                <div className="img-wrapper">
                                    <img src="/assets/images/BarberTools.jpg" className="bg2"/>
                                </div>
                            </Col>
                        </Row>       
                    </Row>
                </div>
            </div>
        </>
    );
}

export default LandingPage;