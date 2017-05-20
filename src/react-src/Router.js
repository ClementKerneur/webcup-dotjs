import React from 'react'
import {
	Switch,
	Route,
  IndexRoute
} from 'react-router'

import Users from './components/Users'
import FrontPage from './components/FrontPage'
import NotFound from './components/NotFound'


const Router = () => (
  <Switch>
    <Route exact path="/" component={FrontPage} />
    <Route path="/users" component={Users} />
    <Route component={NotFound} />
  </Switch>
)

export default Router