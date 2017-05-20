import React from 'react'

import { Link } from 'react-router-dom'
import Loader from './common/Loader'
import FrontItem from './Front/Item'
import ReactAudioPlayer from 'react-audio-player'

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
      <div id='wrap'>
        <ReactAudioPlayer src="/static/audio/background.mp3" autoPlay />
      	<FrontItem name="w1" world="starworld" />
      	<FrontItem name="w2" world="mordor" />
      	<FrontItem name="w3" world="pandora" />
      	<FrontItem name="w4" world="vote" />
      </div>
    )
  }
}

export default FrontPage