import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class PostShow extends Component {
	render() {
		const { post } = this.props
		const { current_user } = this.props
		const { logged_in } = this.props
		return (
			<>
				<h3>Show Page</h3>
				<div>
					<div>
						<img src={post.pic} height='500px' width='500px'></img>
						<h5>Des:{post.des}</h5>
						<h5>ID:{post.id}</h5>
						<h5>User ID:{post.user_id}</h5>

						{logged_in === true && post.user_id === current_user.id && (
							<NavLink to={'/postindex'}>
								<Button onClick={() => this.props.deletePost(post.id)}>
									Delete
								</Button>
							</NavLink>
						)}

						<br />
						<NavLink to='/postindex'>
							<Button color='secondary'>Back to All Post</Button>
						</NavLink>
					</div>
				</div>
			</>
		)
	}
}
export default PostShow
