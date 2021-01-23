import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class PostShow extends Component {
  render() {
    const { post } = this.props
    const { current_user} = this.props
    return (
      <>
        <h3>Show Page</h3>
        <div>
          <div>
          <img src={post.pic}></img>
            <h5>Des:{ post.des }</h5>
            <h5>ID:{ post.id }</h5>
            <h5>User ID:{ post.user_id }</h5>

        { post.user_id === current_user.id &&  <Button>Delete</Button>}

            <br />
            <NavLink to="/apartmentindex">
              <Button color="secondary">
                Back to All Apartments
              </Button>
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}
export default PostShow