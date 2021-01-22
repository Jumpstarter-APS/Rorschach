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
        id: "",
        pic: "",
        des: "",
        user_id: this.props.current_user.id
      },
      submitted: false
    }
  }
  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewApartment(this.state.form)
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
                  name="street"
                  onChange={ this.handleChange }
                  value={ this.state.form.street }
                />
              </FormGroup>
              <FormGroup>
                <Label>Des</Label>
                <Input
                  type="text"
                  name="city"
                  onChange={ this.handleChange }
                  value={ this.state.form.city }
                />
              </FormGroup>
              <FormGroup>
                <Label>State</Label>
                <Input
                  type="text"
                  name="state"
                  onChange={ this.handleChange }
                  value={ this.state.form.state }
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
        { this.state.submitted && <Redirect to="/myapartments" /> }
      </React.Fragment>
    )
  }
}
export default ApartmentNew