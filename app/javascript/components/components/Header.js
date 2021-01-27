import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
	render() {
		const { logged_in, sign_in_route, sign_out_route } = this.props
		return (
			<>
				<div className='top-nav'>
					{/* <div className="apartment-logo">AP</div> */}
					<ul className='login'>
						{!logged_in && (
							<li>
								<a href={sign_in_route}>Sign In</a>
							</li>
						)}
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/postindex'>All Posts</NavLink>
						</li>
						{logged_in && (
							<>
								<li>
									<a href={sign_out_route}>Sign Out</a>
								</li>
								<li>
									<NavLink to='/postprofile'>My Posts</NavLink>
								</li>
								<li>
									<NavLink to='/postnew'>Add Post</NavLink>
								</li>
							</>
						)}
					</ul>
				</div>
			</>
		)
	}
}
export default Header
