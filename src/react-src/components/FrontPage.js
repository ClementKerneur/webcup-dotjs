import React from 'react'

import { Link } from 'react-router-dom'
import Loader from './common/Loader'

class FrontPage extends React.Component {
  constructor(props) {
  	super(props)

  	this.state = {
  		loader: true
  	}
  }

  componentDidMount() {
  	setTimeout( () => {
  		this.setState({
  			loader: false
  		});
  	}, 3000 );
  }

  render() {
    return (
      <div>
      	<Loader display={this.state.loader} />
      	<span>Front Page</span>
      	<Link to="/users">Users</Link>
      </div>
    )
  }
}

export default FrontPage