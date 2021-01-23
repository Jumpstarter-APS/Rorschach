import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class PostProfile extends Component {
  render() {
    return (
      <>
        <h3>My Posts</h3>
        <div className="main-index">
          { this.props.mypost && this.props.mypost.map((post, index) => {
            return (
              <div key={ index } >
                <h5>{ post.pic }</h5>
                <h5>{ post.des }</h5>
                <h5>{ post.id }</h5>
                <h5>{ post.user_id }</h5>
                <div>

                  <NavLink to={"/postprofile"}>
                    <Button color="secondary" onClick={ () => this.props.deletePost(post.id) }>
                      Delete
                    </Button>
                  </NavLink>
                </div>
              </div>
            )
          })}
          </div>
      </>
    )
  }
}
export default PostProfile