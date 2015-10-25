/* global LocationsCollection */

import { Component, addons } from 'react'
const { LinkedStateMixin } = addons
import reactMixin from 'react-mixin'
import { History } from 'react-router'
import { Input, Row, Col, ButtonInput } from 'react-bootstrap'
import { styles as UI } from 'constants/styles'

var s = getStyle()

@reactMixin.decorate(LinkedStateMixin)
@reactMixin.decorate(ReactMeteorData)
@reactMixin.decorate(History)
export default class NewTrip extends Component {
  static displayName = 'NewTrip'

  state = {
    availableSize: null,
    date: null,
    fromLocationId: null,
    toLocationId: null
  }

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getMeteorData () {
    Meteor.subscribe('locations')
    Meteor.subscribe('trips')

    return {
      locations: LocationsCollection.find().fetch()
    }
  }

  handleSubmit () {
    const { availableSize, date, fromLocationId, toLocationId } = this.state
    if (!fromLocationId || !toLocationId) {
      window.alert('You have not filled in everything.')
      return
    }
    let spaceQuery = availableSize ? '&availableSize=' + availableSize : ''
    let dateQuery = date ? '&date=' + date : ''

    let queryString =
      '?fromLocationId=' + fromLocationId +
      '&toLocationId=' + toLocationId +
      spaceQuery +
      dateQuery

    this.history.pushState(null, `/trips/search${queryString}`)
  }

  renderFromLocations () {
    return <Input
      type='select'
      valueLink={ this.linkState('fromLocationId') }
    >
      <option value=''>Select a location</option>
      { this.data.locations.map(location =>
          <option key={ location._id } value={ location._id }>{ location.name }</option>
        )
      }
    </Input>
  }

  renderToLocations () {
    return <Input
      type='select'
      valueLink={ this.linkState('toLocationId') }
    >
      <option value=''>Select a location</option>
      { this.data.locations.map(location =>
          <option key={ location._id } value={ location._id }>{ location.name }</option>
        )
      }
    </Input>
  }

  renderDate () {
    return <Input
      type='date'
      placeholder='date'
      valueLink={ this.linkState('date') }
    />
  }

  renderAvailableSize () {
    return <Input
      type='select'
      valueLink={ this.linkState('availableSize') }
    >
      <option value=''>Select an available size</option>
      <option value='xs'>XS (up to 500g)</option>
      <option value='s'>S (up to 1kg)</option>
      <option value='m'>M (up to 3kg)</option>
    </Input>
  }

  render () {
    return <div>
      <Row style={s.row}>
        <Col xs={3}>{ this.renderFromLocations() }</Col>
        <Col xs={3}>{ this.renderToLocations() }</Col>
        <Col xs={3}>{ this.renderDate() }</Col>
        <Col xs={2}>{ this.renderAvailableSize() }</Col>
        <Col xs={1}><ButtonInput type='submit' value='Submit' onClick={ this.handleSubmit } /></Col>
      </Row>
    </div>
  }
}

function getStyle () {
  return {
    row: {
      backgroundColor: UI.widgetBg,
      maxWidth: 1100,
      margin: 'auto'
    }
  }
}
