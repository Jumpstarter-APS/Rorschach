import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				pic: '',
				des: '',
				user_id: this.props.current_user.id,
			},
			submitted: false,
		}

		//fetch picture here
		//fetch picture
		//look into the security of api key
		//set state to fetched image
		//make an onclick that gives you a new image. limit 3 times
	}

	componentDidMount() {
		this.getNewPic()
	}

	handleChange = (e) => {
		let { form } = this.state
		form[e.target.name] = e.target.value
		this.setState({ form: form })
	}

	handleSubmit = () => {
		this.props.createNewPost(this.state.form)
		this.setState({ submitted: true })
	}

	getNewPic = () => {
		fetch(
			'https://api.unsplash.com/photos/?client_id=-KQ11bQIym0-9gUNFtSQFdHMniZjFTIOp21lbrBFS1M'
		)
			.then((response) => {
				return response.json()
			})
			.then((payload) => {
				this.setState({
					pic: payload[Math.floor(Math.random() * 10)].urls.small,
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {
		console.log(this.state.pic)
		return (
			<React.Fragment>
				{/* <h3>Add an Post</h3>
				<div className='body-container'>
					<div className='form'>
						<Form>
							<FormGroup>
								<Label>
									<img src={this.state.pic} alt='A random image' />
								</Label>
								<Input
									type='text'
									name='pic'
									onChange={this.handleChange}
									value={this.state.form.pic}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Des</Label>
								<Input
									type='text'
									name='des'
									onChange={this.handleChange}
									value={this.state.form.des}
								/>
							</FormGroup>

							<Button
								name='submit'
								color='secondary'
								onClick={this.handleSubmit}
							>
								Add a New Post
							</Button>
						</Form>
					</div>
				</div>
				{this.state.submitted && <Redirect to='/postindex' />}
				{this.state.pic && (
					<div>
						<img
							onClick={this.getNewPic}
							src={this.state.pic}
							alt='Random Image'
						/>
					</div>
				)} */}
				<img src={this.state.pic} alt='' />
				<h2>image:{this.state.pic}</h2>
			</React.Fragment>
		)
	}
}
export default ApartmentNew
