import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'reactstrap'

class Header extends Component {
	render() {
		const { logged_in, sign_in_route, sign_out_route } = this.props
		return (
			<>
				<div>
					<Navbar className='nav-bar' bg='light' variant='light'>
						<Nav className='ml-auto'>
							<NavLink className='header-link' href='/'>
								Home
							</NavLink>
							<NavLink className='header-link' href='/aboutus'>
								About Us
							</NavLink>
							<NavLink className='header-link' href='/postindex'>
								All Posts
							</NavLink>
							{!logged_in && (
								<NavLink className='header-link' href={sign_in_route}>
									Sign In
								</NavLink>
							)}
							{logged_in && (
								<>
									<NavLink className='header-link' href='/postprofile'>
										My Posts
									</NavLink>
									<NavLink className='header-link' href='/postnew'>
										New Post
									</NavLink>
									<NavLink className='header-link' href={sign_out_route}>
										Sign Out
									</NavLink>
								</>
							)}
						</Nav>
					</Navbar>
				</div>
			</>
		)
	}
}
export default Header
