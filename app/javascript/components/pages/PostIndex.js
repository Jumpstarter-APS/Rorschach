import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
	ListGroup,
	ListGroupItemHeading,
	ListGroupItemText,
	Button,
} from 'reactstrap'
import Footer from '../components/Footer'
import galaxy from '../assets/galaxy.jpg'


class PostIndex extends Component {
	render() {
		const { posts } = this.props
		return (
			<React.Fragment>

                <div>
                <img src={galaxy} className="bg"></img>
                
                </div>
				<h1 className= 'title-formating'>All the Posts</h1>
				{/* <hr
					style={{
						height: '.5rem',
						border: 'none',
						color: '#fafeff',
						backgroundColor: '#fafeff',
					}}
				/> */}
				<>
					<div className='cats-display-wrapper'>
						{posts &&
							posts.map((post, index) => {
								return (
									<NavLink to={`/postshow/${post.id}`} id='details' key={index}>
										<ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<img loading= 'lazy' src={post.pic} style={{ width: '100%' }} />
											<div className='cat-description-wrapper'>
												<h4>
													{/* This will display username */}
													{post.id}
													<br></br>
												</h4>
												<br></br>
												<div>
													<ListGroupItemText>{post.des}</ListGroupItemText>
												</div>
											</div>
										</ListGroup>
									</NavLink>
								)
							})}
					</div>
				</>
				<Footer />
			</React.Fragment>
		)
	}
}
export default PostIndex
