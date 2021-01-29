import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ListGroup, ListGroupItemText, Button, } from 'reactstrap'

class PostShow extends Component {
	render() {
		const { post } = this.props
		const { current_user } = this.props
		const { logged_in } = this.props
		return (
			<>
				<h1 style={{ textAlign: 'center' }}>Show Page</h1>
				<div className='cats-display-wrapper'>
				{ post && (
				<div>
					<div>

	
					<ListGroup
											className='cat-wrapper'
											style={{ width: '700px' }}
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
                                   <br></br>
						{logged_in === true && post.user_id === current_user.id && (
							
							<NavLink to={'/postindex'}>
								<button className='button' onClick={() => this.props.deletePost(post.id)}>
									Delete
								</button>
								
							</NavLink>
						)}

						<br />
						<NavLink to='/postindex'>
							<button className='button'color='secondary'>Back to All Posts</button>
						</NavLink>
	                
				   
					</div>

				</div>
				)}
				</div>	
			</>
		)
	}
}
export default PostShow
