/* global Locations */

import { Component } from 'react'
import reactMixin from 'react-mixin'
import Header from 'components/header'
import Section from 'components/section'

var s = getStyle()

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
        <Header />
        <div style={s.heroshot}></div>
        <Section title='How does it works'>
          Images
        </Section>
      </div>
    )
  }
}

function getStyle () {
  return {
    heroshot: {
      height: 500,
      backgroundImage: 'url(' + require('./hero.jpg') + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      WebkitFilter: 'grayscale(1)'
    }
  }
};
