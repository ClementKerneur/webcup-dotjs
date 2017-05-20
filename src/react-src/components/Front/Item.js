import React from 'react'
import Sound from 'react-sound'

class FrontItem extends React.Component {

  handleDesactive () {
    this.setState({
      isActive: false,
      isSoundPlayed: "STOPPED"
    })
  }

  handleActive () { 
    this.setState({
      isActive: true,
      isSoundPlayed: "PLAYING"
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
      isSoundPlayed: "PLAYING"
    }

  }


  render() {
    var activeclass = 'nonactive'
    if(this.state.isActive) {
      var activeclass = 'active'
    }
    else {
      var activeclass = 'nonactive'
    }

    return (
      <div className={'column '+this.props.name+' '+activeclass} onMouseEnter={this.handleActive.bind(this)} onMouseLeave={this.handleDesactive.bind(this)}>
        <Sound url="/static/audio/beep.mp3" playStatus={this.state.isSoundPlayed} />
        <span>
          <audio id="beep" preload="auto">
              <source src="beep.mp3" />
          </audio>          
          <div className={this.props.world+'-img world-svg'}>
              <center><img src={'/static/images/front/'+this.props.world+'.svg'} /></center>
          </div>
        </span>
      </div>
    )
  }
}

export default FrontItem