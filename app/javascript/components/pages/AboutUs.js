import React, { Component } from 'react';
import Footer from '../components/Footer'
import brokenpolaroid from '../assets/brokenpolaroid.jpeg'
import {
	ListGroup,
	ListGroupItemHeading,
	ListGroupItemText,
	Button,
} from 'reactstrap'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import blacksand from '../assets/blacksand.jpg'
import sami from '../assets/sami.png'
import Alejandro from '../assets/Alejandro.jpg'
import priscila from '../assets/priscila.jpeg'


class AboutUs extends Component {
    render() {
        return (
            <div>
				<div>
                <img src={blacksand} className="bg"></img>
                
                </div>

             <h1 className= 'title-formating'>About Us</h1>

                <>
					<div className='cats-display-wrapper'style={{ paddingBottom: '100px' }} >
						
										<ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<img src={sami} style={{ width: '100%' }} />
											<div id='post-description-wrapper'>
												<h4>
												
													<br></br>
												</h4>
												<br></br>
												<div>
													<ListGroupItemText> <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Sami</h1></ListGroupItemText>
                                                    <h3> <a id= 'icons' href= "https://www.linkedin.com/in/mabrouk10/"> < FaLinkedin /> </a> 
                                                    
                                                    <a id= 'icons' href="https://github.com/mabrouk10"> <FaGithub /> </a>
                                                    </h3>
                                                   
												</div>
											</div>
										</ListGroup>

                                        <ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<img src={Alejandro} style={{ width: '100%' }} />
											<div id='post-description-wrapper'>
												<h4>
												
													<br></br>
												</h4>
												<br></br>
												<div>
													<ListGroupItemText> <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Alejandro</h1></ListGroupItemText>
                                                    <h3> <a id= 'icons' href= "https://www.linkedin.com/in/alejandroestrada617/"> < FaLinkedin /> </a> 
                                                    
                                                    <a id= 'icons' href="https://github.com/aestrada611"> <FaGithub /> </a>
                                                    </h3>
                                                   
												</div>
											</div>
										</ListGroup>

                                        <ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<img src={priscila} style={{ width: '100%' }} />
											<div id='post-description-wrapper'>
												<h4>
												
													<br></br>
												</h4>
												<br></br>
												<div>
													<ListGroupItemText> <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Priscila</h1></ListGroupItemText>
                                                             
                                                    <h3> <a id= 'icons' href= "https://www.linkedin.com/in/priscilap-developer/"> < FaLinkedin /> </a> 
                                                    
                                                     <a id= 'icons' href="https://github.com/priscila2294"> <FaGithub /> </a>
                                                     </h3>
                                               </div>
											</div>
										</ListGroup>
					</div>   
				</>
                <Footer />
            </div>
        );
    }
}

export default AboutUs;