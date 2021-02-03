import React, { Component } from 'react';
import yeet from '../assets/yeet.jpg'
import giphy2working from '../assets/giphy2working.gif'
import Footer from '../components/Footer'
import Typewriter from 'typewriter-effect'

class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <img src={yeet} className="bg"></img>
            <div className="giph">
        
                <img src={giphy2working} />
                <div className='Type-writer'>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString("What's on your mind?")
                        // .callFunction(() => {
                            // alert("Hello!!!!!!!!");
                        // })
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Interesting?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Inspiring?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .typeString("Funny?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Emotional?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Absorbing?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Exciting?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Provocative?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Striking?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Riveting?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Romantic?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Exciting?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Immaculate?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Shameless?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Taboo?")
                        .deleteAll()
                        .start()
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Delightful?")
                        .deleteAll()
                        .start()
                        .typeString("Welcome")
                        ;
                    }}
                    />
                </div>
            </div>


            
            
            </React.Fragment>
            
        );
    }
}

export default Home;