import React from 'react'

import { Route } from 'react-router-dom'
import StarWorld from './Parks/StarWorld'
import Pandora from './Parks/Pandora'
import Mordor from './Parks/Mordor'
import Vote from './Parks/Vote'

// import StarWorldPresentation from './Parks/StarWorldPresentation'
// import PandoraPresentation from './Parks/PandoraPresentation'
import MordorPresentation from './Parks/MordorPresentation'

class ParksPage extends React.Component {

  render() {
    return (
      <div>
        <Route path={`${this.props.match.url}/mordor`} component={Mordor} />
        <Route path={`${this.props.match.url}/pandora`} component={Pandora} />
        <Route path={`${this.props.match.url}/starworld`} component={StarWorld} />
        <Route path={`${this.props.match.url}/vote`} component={Vote} />

        <Route path={`${this.props.match.url}/mordor-presentation`} component={MordorPresentation} />
        
      </div>
    )
  }
}

export default ParksPage