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


class AboutUs extends Component {
    render() {
        return (
            <div>
             <h1 style={{ textAlign: 'center', fontSize: '5rem' }}>About Us</h1>

                <>
					<div className='cats-display-wrapper'>
						
										<ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<img src={brokenpolaroid} style={{ width: '100%' }} />
											<div id='post-description-wrapper'>
												<h4>
												
													<br></br>
												</h4>
												<br></br>
												<div>
													<ListGroupItemText> <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Sami</h1></ListGroupItemText>
                                                    <h3> <a href= "https://www.linkedin.com/in/mabrouk10/"> < FaLinkedin /> </a> 
                                                    
                                                    <a href="https://github.com/mabrouk10"> <FaGithub /> </a>
                                                    </h3>
                                                   
												</div>
											</div>
										</ListGroup>

                                        <ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<img src={brokenpolaroid} style={{ width: '100%' }} />
											<div id='post-description-wrapper'>
												<h4>
												
													<br></br>
												</h4>
												<br></br>
												<div>
													<ListGroupItemText> <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Alejandro</h1></ListGroupItemText>
                                                    <h3> <a href= "https://www.linkedin.com/in/alejandroestrada617/"> < FaLinkedin /> </a> 
                                                    
                                                    <a href="https://github.com/aestrada611"> <FaGithub /> </a>
                                                    </h3>
                                                   
												</div>
											</div>
										</ListGroup>

                                        <ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<img src={brokenpolaroid} style={{ width: '100%' }} />
											<div id='post-description-wrapper'>
												<h4>
												
													<br></br>
												</h4>
												<br></br>
												<div>
													<ListGroupItemText> <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Priscila</h1></ListGroupItemText>
                                                             
                                                    <h3> <a href= "https://www.linkedin.com/in/priscilap-developer/"> < FaLinkedin /> </a> 
                                                    
                                                     <a href="https://github.com/priscila2294"> <FaGithub /> </a>
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