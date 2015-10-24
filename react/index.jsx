import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'App'
import Landing from 'handlers/landing/Landing'
import Wrapper from 'handlers/Wrapper'
import User from 'handlers/User'
import Trips from 'handlers/Trips'
import Trip from 'handlers/Trip'
import NewTrip from 'handlers/NewTrip'

ReactRouterSSR.Run(
  <Route path='/' component={ App }>
    <IndexRoute component={ Landing } />
    <Route component={ Wrapper }>
      <Route path='users/:userId' component={ User } />
      <Route path='trips'>
        <IndexRoute component={ Trips } />
        <Route path='new' component={ NewTrip } />
        <Route path=':tripId' component={ Trip } />
      </Route>
    </Route>
  </Route>
)
