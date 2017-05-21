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
    console.log(this.props)
    return (
      <div id='wrap'>
        <ReactAudioPlayer src="/static/audio/background.mp3" autoPlay />
      	<FrontItem name="w1" world="starworld" url="/parks/starworld" history={this.props.history} />
      	<FrontItem name="w2" world="mordor" url="/parks/mordor"  history={this.props.history} />
      	<FrontItem name="w3" world="pandora" url="/parks/pandora"  history={this.props.history} />
      	<FrontItem name="w4" world="vote" url="/parks/vote"  history={this.props.history} />
      </div>
    )
  }
}

export default FrontPage