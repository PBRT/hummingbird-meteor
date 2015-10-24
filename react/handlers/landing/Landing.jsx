/* global Locations */

import { Component } from 'react'
import reactMixin from 'react-mixin'
import Process from './process'
import Cta from './cta'
import Question from './question'
import Radium from 'radium'

var s = getStyle()
@Radium
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
    return (
      <div>
        <div style={s.heroshot}>
        </div>
        <Process />
        <Cta />
        <Question />
      </div>
    )
  }
}

function getStyle () {
  return {
    heroshot: {
      height: 500,
      backgroundImage: 'url(' + require('./assets/hero.jpg') + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      WebkitFilter: 'grayscale(1)'
    }
  }
};
