import React, { Component } from 'react';
import yeet from '../assets/yeet.jpg'
import giphy2working from '../assets/giphy2working.gif'
import Footer from '../components/Footer'

class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <img src={yeet} className="bg"></img>
            <div className="giph">
                
                <img src={giphy2working} />
            </div>
            
            
            </React.Fragment>
            
        );
    }
}

export default Home;