import React from 'react'

import { Link } from 'react-router-dom'

class FrontPage extends React.Component {
  render() {
    return (
      <div>Front Page <Link to="/users">Users</Link></div>
    )
  }
}

export default FrontPage