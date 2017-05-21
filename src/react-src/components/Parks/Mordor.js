import React from 'react'

import { Link } from 'react-router-dom'

class ParkMordor extends React.Component {

  componentWillMount() {
  	var canUseDOM = !!(
		  (typeof window !== 'undefined' &&
		  window.document && window.document.createElement)
		);

  	if(canUseDOM) {
  		this.setState({
  			game: runMordor()
  		});
  	}
  }

  componentWillUnmount() {
  	this.state.game.destroy()
  }

  render() {
    return (
      <div id="mordor-cyg"></div>
    )
  }

}

export default ParkMordor