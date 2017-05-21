import React from 'react'

class Loader extends React.Component {

  render() {
    if(this.props.display) {
      return (
        <img src="/static/images/loader.gif" className="loader" />
      )
    }
    else {
      return null
    }
  }
}

export default Loader