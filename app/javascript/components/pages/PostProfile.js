import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
	ListGroup,
	ListGroupItemHeading,
	ListGroupItemText,
	Button,
} from 'reactstrap'

class PostProfile extends Component {
	render() {
		return (
			<>
				<h1 style={{ textAlign: 'center' }}>My Posts</h1>
				<div className='cats-display-wrapper'>
					{this.props.mypost &&
						this.props.mypost.map((post, index) => {
							return (
								<div>
									<NavLink to={`/postshow/${post.id}`} id='details' key={index}>
										<ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<img src={post.pic} />
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
									<div>
										<br></br>
										<NavLink to={'/postprofile'}>
											<Button
												color='secondary'
												onClick={() => this.props.deletePost(post.id)}
											>
												Delete
											</Button>
										</NavLink>
									</div>
								</div>

								// <div key={index}>
								// 	<img
								// 		src={post.pic}
								// 		alt='A random image'
								// 		height='500px'
								// 		width='500px'
								// 	/>
								// 	<h5>{post.des}</h5>
								// 	<h5>{post.id}</h5>
								// 	<h5>{post.user_id}</h5>
								// 	<div>
								// 		<NavLink to={`/postshow/${post.id}`}>
								// 			<Button>Click to see post!</Button>
								// 		</NavLink>
								// </div>
							)
						})}
				</div>
			</>
		)
	}
}
export default PostProfile
