import React from 'react'

import { Link } from 'react-router-dom'

class ParkPandora extends React.Component {

  componentWillMount() {
  	var canUseDOM = !!(
		  (typeof window !== 'undefined' &&
		  window.document && window.document.createElement)
		);

  	if(canUseDOM) {
  		this.setState({
  			game: runPandora()
  		});
  	}
  }

  componentWillUnmount() {
  	this.state.game.destroy()
  }

  render() {
    return (
      <div id="pandora-cyg"></div>
    )
  }
}

export default ParkPandora