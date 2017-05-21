import React from 'react'
import {
	Switch,
	Route
} from 'react-router-dom'

import Users from './components/Users'
import FrontPage from './components/FrontPage'
import NotFound from './components/NotFound'
import ParksPage from './components/ParksPage'

const Router = () => (
  <Switch>
    <Route exact path="/" component={FrontPage} />
    <Route path="/parks" component={ParksPage} />
    <Route path="/users" component={Users} />
    <Route component={NotFound} />
  </Switch>
)

export default Router