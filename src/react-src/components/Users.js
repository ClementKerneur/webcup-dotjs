import React from 'react'
import {
	Route
} from 'react-router'

import UsersIndex from './Users/Index'
import UsersGGT from './Users/Ggt'

class Users extends React.Component {
  render() {
    return (
      <div>
      	<h1>Users Page</h1>
      	
      	<Route path={`${this.props.match.url}/ggt`} component={UsersGGT} />
      	<Route exact path={`${this.props.match.url}/`} component={UsersIndex} />

      </div>
    )
  }
}

export default Users