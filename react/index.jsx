import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'App'
import Landing from 'handlers/landing/Landing'
import Wrapper from 'handlers/Wrapper'

// Trips
import Trips from 'handlers/Trips'
import Trip from 'handlers/Trip'
import NewTrip from 'handlers/NewTrip'
import TripsSearch from 'handlers/TripsSearch'

// User view
import User from 'handlers/user/User'
import UserTrips from 'handlers/user/UserTrips'
import UserDetails from 'handlers/user/UserDetails'
import UserRequests from 'handlers/user/UserRequests'

ReactRouterSSR.Run(
  <Route path='/' component={ App }>
    <IndexRoute component={ Landing } />
    <Route component={ Wrapper }>
      <Route path='users/:userId' component={ User } >
        <IndexRoute component={ UserDetails } />
        <Route path='trips' component={ UserTrips } />
        <Route path='requests' component={ UserRequests } />
      </Route>
      <Route path='trips'>
        <IndexRoute component={ Trips } />
        <Route path='new' component={ NewTrip } />
        <Route path='search' component={ TripsSearch } />
        <Route path=':tripId' component={ Trip } />
      </Route>
    </Route>
  </Route>
)
