/* global Locations */

import { Component } from 'react'
import { Button } from 'react-bootstrap'
import reactMixin from 'react-mixin'
import LocationList from 'components/LocationList'

const LoginButtons = BlazeToReact('loginButtons')

@reactMixin.decorate(ReactMeteorData)
export default class Landing extends Component {
  static displayName = 'Landing'

  getMeteorData () {
    Meteor.subscribe('locations')

    return {
      locations: Locations.find().fetch()
    }
  }

  render () {
    return <div>
      <LoginButtons />
      <Button>Hello world</Button>
      Hello world

      <LocationList locations={ this.data.locations } />
    </div>
  }
}
