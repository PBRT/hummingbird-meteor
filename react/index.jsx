import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'App'
import Landing from 'handlers/landing/Landing'
import User from 'handlers/User'
import Trips from 'handlers/Trips'
import Trip from 'handlers/Trip'
import NewTrip from 'handlers/NewTrip'

import PropTypes from 'lib/propTypes'
import { Grid, Row, Col } from 'react-bootstrap'

class Wrapper extends require('react').Component {
  static displayName = 'Wrapper'

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return <Grid style={{ paddingTop: '20px', paddingBottom: '20px', minHeight: 'calc(100% - 80px)' }}>
      <Row>
        <Col xs={ 12 }>{ this.props.children }</Col>
      </Row>
    </Grid>
  }
}

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
