import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class PostNew extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				pic: '',
				des: '',
				user_id: this.props.current_user.id,
			},
			clicks: 0,
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

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.createNewPost(this.state.form)
		this.setState({ submitted: true })
	}

	getNewPic = () => {
		fetch('https://picsum.photos/v2/list?page=2&limit=1000')
			.then((response) => {
				return response.json()
			})
			.then((payload) => {
				let { form } = { ...this.state }
				// let picPayload = payload[Math.floor(Math.random() * 90)].download_url
				form.pic = payload[Math.floor(Math.random() * 90)].download_url
				// form.pic = picPayload
				console.log('picturepayload:', form)
				this.setState({
					form: form,
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	newPicClick = () => {
		if (this.state.clicks < 3) {
			this.getNewPic()
			this.setState({ clicks: this.state.clicks + 1 })
		}
	}

	render() {
		// console.log("picture:",this.state.picture)
		console.log('pic inside of form:', this.state.form.pic)
		console.log('form:', this.state.form)
		console.log('state:', this.state)
		return (
			<React.Fragment>
				<h3>Add a Post</h3>
				<div className='body-container'>
					<div className='form'>
						<img src={this.state.form.pic} height='600' width='600' alt='' />
						<Form>
							<FormGroup>
								<Label>Description</Label>
								<Input
									type='text'
									name='des'
									onChange={this.handleChange}
									value={this.state.form.des}
								/>
							</FormGroup>

							<Button
								type='submit'
								color='secondary'
								onClick={this.handleSubmit}
							>
								Add a New Post
							</Button>
							<Button type='button' onClick={this.newPicClick}>
								Click for New Picture({this.state.clicks}/3 clicks)
							</Button>
						</Form>
					</div>
				</div>
				{this.state.submitted && <Redirect to='/postindex' />}
			</React.Fragment>
		)
	}
}
export default PostNew
