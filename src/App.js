import React, { Component } from 'react';
import  Navbar from './Components/pages/Navbar'
import Footer from './Components/pages/FooterComponent'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import BookAppointment from './Components/pages/BookAppointment';
import Pricing from './Components/pages/Pricing'

function App() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route 
            exact path='/' exact component={Home} 
          />
          <Route 
            path='/bookappointment' component={BookAppointment} 
          />
          <Route 
            path='/pricing' component={Pricing} 
          />
          <Redirect 
            to='/' exact component={Home}>
          </Redirect>
        </Switch>
        <Footer />
      </Router>
    );
}
  
export default App;
