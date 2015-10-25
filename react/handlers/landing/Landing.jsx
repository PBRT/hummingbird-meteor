/* global LocationsCollection */

import { Component } from 'react'
import reactMixin from 'react-mixin'
import Process from './process'
import Cta from './cta'
import Question from './question'
import Radium from 'radium'
import Search from 'components/search'

var s = getStyle()
@Radium
@reactMixin.decorate(ReactMeteorData)
export default class Landing extends Component {
  static displayName = 'Landing'

  getMeteorData () {
    Meteor.subscribe('locations')

    return {
      locations: LocationsCollection.find().fetch()
    }
  }

  render () {
    return (
      <div>
        <div style={s.heroshot}>
          <Search />
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
