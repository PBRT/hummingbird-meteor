/* global LocationsCollection */
/* global TripsCollection */
import { Component } from 'react'
import reactMixin from 'react-mixin'
import { Input, Row, Col, ButtonInput } from 'react-bootstrap'

@reactMixin.decorate(ReactMeteorData)
export default class NewTrip extends Component {
  static displayName = 'NewTrip'

  state = {
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
    Meteor.subscribe('locations')

    return {
      locations: LocationsCollection.find().fetch()
    }
  }

  handleSubmit () {
    console.log('hi')
    console.log(this.state)
  }

  renderFromLocations () {
    return <Input type='select' label='Travelling from'>
      <option value=''>Select a location</option>
      { this.data.locations.map(location =>
          <option key={ location._id } value={ location._id }>{ location.name }</option>
        )
      }
    </Input>
  }

  renderToLocations () {
    return <Input type='select' label='Travelling to'>
      <option value=''>Select a location</option>
      { this.data.locations.map(location =>
          <option key={ location._id } value={ location._id }>{ location.name }</option>
        )
      }
    </Input>
  }

  renderDate () {
    return <Input label='Date' type='date' placeholder='date' />
  }

  renderAvailableSize () {
    return <Input label='Available size' type='select'>
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
      <Input label='Description' type='textarea' placeholder='Description' />
      <ButtonInput type='submit' value='Submit' onClick={ this.handleSubmit } />
    </div>
  }
}
