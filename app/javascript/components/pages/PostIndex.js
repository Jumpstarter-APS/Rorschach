import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
	ListGroup,
	ListGroupItemHeading,
	ListGroupItemText,
	Button,
} from 'reactstrap'
import Footer from '../components/Footer'
import galaxy from '../assets/galaxy.jpg'

import { VscArrowSmallUp } from 'react-icons/fa'
import { GoArrowSmallDown } from 'react-icons/fa'

class PostIndex extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	onClick(post, newCount) {
		// updatepostcount pass in the post id and the newcount as args
		// {123123123123: true, 3424: true}
		const newState = { ...this.state, [post.id]: true }
		this.setState(newState)
		/// make request
		//on success
		const updatedPost = { ...post, count: newCount }
		this.props.updatePostCount(updatedPost).finally(() => {
			this.state = { ...newState, [post.id]: false }
			this.setState(newState)
		})
	}

	render() {
		const { posts } = this.props
		//make a method that references the updatepostcount on app.js
		//increment method
		//decrement method
		return (
			<React.Fragment>
				<div>
					<img src={galaxy} className='bg'></img>
				</div>
				<h1 className='title-formating'>All the Posts</h1>
				{/* <hr
                    style={{
                        height: '.5rem',
                        border: 'none',
                        color: '#FAFEFF',
                        backgroundColor: '#FAFEFF',
                    }}
                /> */}
				<>
					<div className='cats-display-wrapper'>
						{posts &&
							posts.map((post, index) => {
								return (
									<ListGroup
										className='cat-wrapper'
										style={{ width: '300px', height: '100%' }}
										key={index}
									>
										<div className='cat-description-wrapper'>
											<NavLink to={`/postshow/${post.id}`} id='details'>
												<img
													loading='lazy'
													src={post.pic}
													style={{ width: '100%' }}
												/>
												<h4>
													{/* This will display username */}
													{post.username}
													<br></br>
												</h4>
												<br></br>
												<div>
													<ListGroupItemText>{post.des}</ListGroupItemText>
												</div>
											</NavLink>
											<div
												style={{
													display: 'flex',
													// flexDirection: 'row',
													alignItems: 'center',
													justifyContent: 'space-around',
													fontSize: '2vw',
												}}
											>
												{/* put the count somewhere in card */}

												<div
													// style={{ fontSize: '15px', textAlign: 'center' }}
													disabled={this.state[post.id]}
													onClick={() => this.onClick(post, post.count + 1)}
												>
													↑
												</div>

												{post.count || 0}
												<div
													// style={{ fontSize: '15px', textAlign: 'center' }}
													disabled={this.state[post.id]}
													onClick={() => this.onClick(post, post.count - 1)}
												>
													↓
												</div>
											</div>
										</div>
									</ListGroup>
								)
							})}
					</div>
				</>
				<Footer />
			</React.Fragment>
		)
	}
}
export default PostIndex
