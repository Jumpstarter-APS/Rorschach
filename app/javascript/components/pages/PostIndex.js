import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
	ListGroup,
	ListGroupItemHeading,
	ListGroupItemText,
	Button,
} from 'reactstrap'

class PostIndex extends Component {
	render() {
		const { posts } = this.props
		return (
			<React.Fragment>
				<h1 style={{ textAlign: 'center' }}>All the Posts</h1>

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
								)
							})}
					</div>
				</>
			</React.Fragment>
		)
	}
}
export default PostIndex
