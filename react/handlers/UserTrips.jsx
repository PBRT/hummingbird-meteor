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

  getMeteorData () {
    Meteor.subscribe('trips')

    return {
      trips: TripsCollection.find({ 'userId': this.props.params.userId }).fetch()
    }
  }

  cancelTrip (tripId) {
    TripsCollection.remove(tripId)
  }

  renderTrips () {
    let myTrips = [
      {
        date: new Date(),
        from: 'Toulouse',
        to: 'London',
        space: 2,
        id: 0
      },
      {
        date: new Date(),
        from: 'Toulouse',
        to: 'London',
        space: 2,
        id: 1
      },
      {
        date: new Date(),
        from: 'Toulouse',
        to: 'London',
        space: 2,
        id: 2
      }
    ]

    return myTrips.map((item, index) => {
      return (
        <div key={index} style={s.tripContainer}>
          <Row>
            <Col sm={6}>
              <div>Date: {item.date.toString()}</div>
              <div>From: {item.from} to {item.to}</div>
              <div>I have {item.space}</div>
            </Col>
            <Col sm={3} smOffset={3}>
              <Button bsStyle='primary' style={{marginRight: 20}}>Edit Trip</Button>
              <Button bsStyle='danger' onClick={this.cancelTrip.bind(null, item.id)}>Cancel Trip</Button>
            </Col>
          </Row>
        </div>
      )
    })
  }

  render () {
    console.log(this.data.trips)

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
