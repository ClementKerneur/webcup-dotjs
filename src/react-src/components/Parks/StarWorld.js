import React from 'react'

import { Link } from 'react-router-dom'

class ParkStarWorld extends React.Component {

  componentWillMount() {
  	var canUseDOM = !!(
		  (typeof window !== 'undefined' &&
		  window.document && window.document.createElement)
		);

  	if(canUseDOM) {
  		runStarWorld()
  	}
  }

  render() {
    return (
      <div id="starworld-cyg"></div>
    )
  }
}

export default ParkStarWorld