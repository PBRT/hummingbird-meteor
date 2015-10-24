/* global TripsCollection */
import { Component, PropTypes } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import reactMixin from 'react-mixin'
import { styles as UI } from 'constants/styles'

var s = getStyle()

@reactMixin.decorate(ReactMeteorData)
export default class UserTrips extends Component {
  static displayName = 'UserTrips'
  static propTypes = {
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired
    }).isRequired
  }

  constructor (props) {
    super(props)

    this.cancelTrip = this.cancelTrip.bind(this)
  }

  getMeteorData () {
    Meteor.subscribe('trips')

    return {
      trips: TripsCollection.find({ userId: this.props.params.userId }).fetch()
    }
  }

  cancelTrip (tripId) {
    TripsCollection.remove({ _id: tripId })
  }

  renderTrips () {
    return this.data.trips.map(trip =>
      <div key={trip._id} style={s.tripContainer}>
        <Row>
          <Col sm={6}>
            <div>Date: {trip.date.toString()}</div>
            <div>From: {trip.fromLocationId} to {trip.toLocationId}</div>
            <div>I have {trip.availableSize}</div>
            <div>{trip.description}</div>
          </Col>
          <Col sm={3} smOffset={3}>
            <Button bsStyle='primary' style={{marginRight: 20}}>Edit Trip</Button>
            <Button bsStyle='danger' onClick={this.cancelTrip.bind(null, trip._id)}>Cancel Trip</Button>
          </Col>
        </Row>
      </div>
    )
  }

  render () {
    return (
      <div>
        <div className='text-center' style={s.title}>
          My Trips
        </div>
        {this.renderTrips()}
      </div>
    )
  }
}

function getStyle () {
  return {
    title: {
      marginBottom: 30
    },
    tripContainer: {
      padding: '20px 30px',
      border: '1px solid',
      borderColor: UI.primary,
      marginBottom: 20,
      borderRadius: 2
    }
  }
}
