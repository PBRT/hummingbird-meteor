/* global LocationsCollection */
/* global TripsCollection */
import { Component, addons } from 'react'
const { LinkedStateMixin } = addons
import reactMixin from 'react-mixin'
import { History } from 'react-router'
import { Input, Row, Col, ButtonInput } from 'react-bootstrap'

@reactMixin.decorate(LinkedStateMixin)
@reactMixin.decorate(ReactMeteorData)
@reactMixin.decorate(History)
export default class NewTrip extends Component {
  static displayName = 'NewTrip'

  state = {
    availableSize: null,
    date: null,
    description: null,
    fromLocationId: null,
    toLocationId: null
  }

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getMeteorData () {
    return {
      locations: LocationsCollection.find().fetch()
    }
  }

  handleSubmit () {
    const { availableSize, date, description, fromLocationId, toLocationId } = this.state
    if (!availableSize || !date || !description || !fromLocationId || !toLocationId) {
      window.alert('You have not filled in everything.')
      return
    }
    TripsCollection.insert({
      userId: Meteor.user()._id,
      availableSize,
      date,
      description,
      fromLocationId,
      toLocationId
    })
    this.history.pushState(null, `/users/${Meteor.user()._id}/trips`)
  }

  renderFromLocations () {
    return <Input
      type='select'
      label='Travelling from'
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
      label='Travelling to'
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
      label='Date'
      type='date'
      placeholder='date'
      valueLink={ this.linkState('date') }
    />
  }

  renderAvailableSize () {
    return <Input
      label='Available size'
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
      <h3>Create a new trip</h3>
      <Row>
        <Col xs={6}>{ this.renderFromLocations() }</Col>
        <Col xs={6}>{ this.renderToLocations() }</Col>
      </Row>
      <Row>
        <Col xs={6}>{ this.renderDate() }</Col>
        <Col xs={6}>{ this.renderAvailableSize() }</Col>
      </Row>
      <Input
        label='Description'
        type='textarea'
        placeholder='Description'
        valueLink={ this.linkState('description') }
      />
      <ButtonInput type='submit' value='Submit' onClick={ this.handleSubmit } />
    </div>
  }
}
