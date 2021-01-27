import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class PostIndex extends Component {
	render() {
		const { post } = this.props
		return (
			<React.Fragment>
				<h3>All the Posts</h3>
				<div>
					{this.props.posts &&
						this.props.posts.map((post, index) => {
							return (
								<div key={index}>
									<img src={post.pic} height='500px' width='500px'></img>
									<h5>Description: {post.des}</h5>
									<h5>ID: {post.id}</h5>
									<h5>User ID: {post.user_id}</h5>
										<NavLink to={`/postshow/${post.id}`}>
									<Button>
											Click to see post!
									</Button>
										</NavLink>
								</div>
							)
						})}

					{/* make a button to take you to show page of individual post */}
				</div>
			</React.Fragment>
		)
	}
}
export default PostIndex
