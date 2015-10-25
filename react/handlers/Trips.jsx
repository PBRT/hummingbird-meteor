/* global TripsCollection */
import { Component } from 'react'
import reactMixin from 'react-mixin'

@reactMixin.decorate(ReactMeteorData)
export default class Trips extends Component {
  static displayName = 'Trips'

  getMeteorData () {
    return {
      trips: TripsCollection.find().fetch()
    }
  }

  render () {
    console.log(this.data.trips)
    return <div>hello Trips</div>
  }
}
