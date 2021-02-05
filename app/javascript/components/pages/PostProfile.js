import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
	ListGroup,
	ListGroupItemHeading,
	ListGroupItemText,
	Button,
} from 'reactstrap'
import Footer from '../components/Footer'
import purple from '../assets/purple.jpg'

class PostProfile extends Component {
	render() {
		return (
			<>
				<div
				// style={{ height: '100vh' }}
				>
					<img src={purple} className='bg'></img>
					<h1 className='title-formating'>My Posts</h1>
					{/* <hr
					style={{
						height: '.5rem',
						border: 'none',
						color: '#212529',
						backgroundColor: '#212529',
					}}
				/> */}
					<div className='cats-display-wrapper'>
						{this.props.mypost &&
							this.props.mypost.map((post, index) => {
								return (
									<div key={index}>
										<ListGroup
											className='cat-wrapper'
											style={{ width: '300px' }}
										>
											<NavLink to={`/postshow/${post.id}`} id='details'>
												<img
													src={post.pic}
													style={{ width: '100%' }}
													className='image-hover'
												/>
											</NavLink>

											<div
												className='cat-description-wrapper'
												style={{
													display: 'flex',
													alignItems: 'center',
													flexDirection: 'column',
													// justifyContent: 'space-around',
													// fontSize: '2vw',
													paddingBottom: '1vh',
													paddingTop: '2vh',
												}}
											>
												<div>
													<ListGroupItemText>{post.des}</ListGroupItemText>
												</div>
												<p style={{ fontSize: '30Spx' }}>{post.count || 0}</p>
											</div>
										</ListGroup>
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
				</div>
				<Footer style={{ bottom: '0' }} />
			</>
		)
	}
}
export default PostProfile
