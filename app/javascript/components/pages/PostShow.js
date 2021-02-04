import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ListGroup, ListGroupItemText, Button } from 'reactstrap'
import Footer from '../components/Footer'
import sky from '../assets/sky.jpg'

class PostShow extends Component {
	render() {
		const { post } = this.props
		const { current_user } = this.props
		const { logged_in } = this.props
		return (
			<>
				<div>
					<img src={sky} className='bg'></img>
				</div>
				{/* <h1 style={{ textAlign: 'center', fontSize: '5rem' }}>
					Check This Post Out
				</h1> */}
				{/* <hr
					style={{
						height: '1rem',
						border: 'none',
						color: '#212529',
						backgroundColor: '#212529',
					}}
				/> */}
				<div className='cats-display-wrapper'>
					{post && (
						<div>
							<div>
								<ListGroup className='cat-wrapper' style={{ width: '700px' }}>
									<img src={post.pic} style={{ width: '100%' }} />
									<div
										id='post-description-wrapper'

										// style={{ width: '100%', backgroundColor: 'white' }}
									>
										<br></br>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												flexDirection: 'column',
											}}
										>
											<ListGroupItemText>{post.des}</ListGroupItemText>
											<h1>{post.count}</h1>
										</div>
									</div>
								</ListGroup>
								<br></br>
								{logged_in === true && post.user_id === current_user.id && (
									<NavLink to={'/postindex'}>
										<button
											id='deleteButton'
											onClick={() => this.props.deletePost(post.id)}
										>
											Delete
										</button>
									</NavLink>
								)}

								<br />
								<NavLink to='/postindex'>
									<button className='button' color='secondary'>
										Back to All Posts
									</button>
								</NavLink>
							</div>
						</div>
					)}
				</div>
				<Footer />
			</>
		)
	}
}
export default PostShow
