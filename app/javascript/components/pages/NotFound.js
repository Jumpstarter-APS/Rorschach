import React, { Component } from 'react';
import Footer from '../components/Footer'
import notfound from '../assets/notfound.jpeg'



class NotFound extends Component {
    render() {
        return (
            <div className= 'not-found'>
                <div >
                <img src={notfound} className="bg"></img>
                
                </div>
               
               <h1 className= 'not-found' className= 'title-formating'> Not Found Page </h1>
            
            </div>
            
        );
    }
}

export default NotFound;