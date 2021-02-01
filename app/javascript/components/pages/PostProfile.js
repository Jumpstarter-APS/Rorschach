import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
	ListGroup,
	ListGroupItemHeading,
	ListGroupItemText,
	Button,
} from 'reactstrap'
import Footer from '../components/Footer'


class PostProfile extends Component {
	render() {
		return (
			<>
				<h1 style={{ textAlign: 'center', fontSize: '5rem' }}>My Posts</h1>
				<hr
					style={{
						height: '.5rem',
						border: 'none',
						color: '#212529',
						backgroundColor: '#212529',
					}}
				/>
				<div className='cats-display-wrapper'>
					{this.props.mypost &&
						this.props.mypost.map((post, index) => {
							return (
								<div key={index}>
									<NavLink to={`/postshow/${post.id}`} id='details'>
										<ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<img src={post.pic} style={{ width: '100%' }} />
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
											<button
												// className='button'
												// color='secondary'
												id='deleteButton'
												onClick={() => this.props.deletePost(post.id)}
											>
												Delete
											</button>
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
				<br />
				<br />
				<NavLink to={'/postindex'}>
					<button
						// className='button'
						// color='secondary'
						// style={{ backgroundColor: '' }}
						className='button'
						color='secondary'
						// id='deleteButton'
					>
						Back to all Posts
					</button>
				</NavLink>
				<Footer />
			</>
		)
	}
}
export default PostProfile
