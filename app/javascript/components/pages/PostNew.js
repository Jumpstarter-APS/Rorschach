import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component{
  constructor(props){
    super(props)
    this.state = {
      form:{
        pic: "",
        des: "",
        user_id: this.props.current_user.id
      },
      submitted: false
    }

    //fetch picture here
    //fetch picture
    //look into the security of api key
    //set state to fetched image
    //make an onclick that gives you a new image. limit 3 times

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

  render(){
    return(
      <React.Fragment>
        <h3>Add an Post</h3>
        <div className="body-container">
          <div className="form">
            <Form>
              <FormGroup>
                <Label>Pic</Label>
                <Input
                  type="text"
                  name="pic"
                  onChange={ this.handleChange }
                  value={ this.state.form.pic }
                />
              </FormGroup>
              <FormGroup>
                <Label>Des</Label>
                <Input
                  type="text"
                  name="des"
                  onChange={ this.handleChange }
                  value={ this.state.form.des }
                />
              </FormGroup>
            
              <Button
                name="submit"
                color="secondary"
                onClick={ this.handleSubmit }
              >
                Add a New Post
              </Button>
            </Form>
          </div>
        </div>
        { this.state.submitted && <Redirect to="/postindex" /> }
      </React.Fragment>
    )
  }
}
export default ApartmentNew