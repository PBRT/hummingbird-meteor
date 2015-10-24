import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'App'
import Landing from 'handlers/landing/Landing'
import User from 'handlers/User'

ReactRouterSSR.Run(
  <Route path='/' component={ App }>
    <IndexRoute component={ Landing } />
    <Route path='users/:userId' component={ User } />
  </Route>
)
