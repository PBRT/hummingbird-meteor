/* global Locations */
Meteor.subscribe('locations')

import { Component } from 'react'
import { Button } from 'react-bootstrap'
import reactMixin from 'react-mixin'
import LocationList from 'components/LocationList'

const LoginButtons = BlazeToReact('loginButtons')

@reactMixin.decorate(ReactMeteorData)
export default class Landing extends Component {
  static displayName = 'Landing'

  getMeteorData () {
    return {
      locations: Locations.find().fetch()
    }
  }

  render () {
    console.log(this.data.locations)
    return <div>
      <LoginButtons />
      <Button>Hello world</Button>
      Hello world

      <LocationList locations={ this.data.locations } />
    </div>
  }
}
