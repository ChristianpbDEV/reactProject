import React from 'react'
import { Link } from 'react-router-dom';
import './BookAppointment.css';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

function BookAppointment(){
    return (
        <>
            <div className="body">
                <h3 className="BA_Header">Book With Booksy</h3>
                    <div className="container_BA container">
                        <div className="row">
                            <div className="col-md-4">
                                <Card className="card">
                                <CardImg 
                                    src="/assets/images/background2.jpeg"  
                                    className="cardimages"
                                    />
                                <CardBody>
                                    <CardTitle className="barber">
                                            Gene
                                    </CardTitle>
                                    <CardText>
                                            Some quick example text to build on  
                                            the card title and make up the bulk  
                                            of the card's content.
                                    </CardText>
                                    <Button buttonSize='btn--wide' buttonColor='--primary'>
                                            Book Appointment
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="card">
                                <CardImg
                                        src="/assets/images/BarberTool1.jpg"
                                        className="cardimages"
                                    />
                                <CardBody>
                                    <CardTitle className="barber">
                                            Marion
                                    </CardTitle>
                                    <CardText>
                                            Some quick example text to build on  
                                            the card title and make up the bulk  
                                            of the card's content.
                                    </CardText>
                                    <Button buttonSize='btn--wide' buttonColor='--primary'>
                                            Book Appointment
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className="card">
                                <CardImg  
                                        className="cardimages"
                                        src="/assets/images/BarberTools3.jpeg" 
                                    />
                                <CardBody>
                                    <CardTitle className="barber">
                                            Lisa
                                    </CardTitle>
                                    <CardText>
                                            Some quick example text to build on  
                                            the card title and make up the bulk  
                                            of the card's content.
                                    </CardText>
                                    <Button>
                                            Book Appointment
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                   </div>
                </div>
            </div>  
        </>
    )
}

export default BookAppointment;
