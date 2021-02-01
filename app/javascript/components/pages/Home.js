import React, { Component } from 'react';
import yeet from '../assets/yeet.jpg'
import giph from '../assets/giphy.gif'
import Footer from '../components/Footer'

class Home extends Component {
    render() {
        return (
            <React.Fragment>

            <div>
                <img src={yeet} className="bg"></img>
                
                <img src={giph} className="giph"></img>
            </div>
            
            
            </React.Fragment>
            
        );
    }
}

export default Home;