/* global RequestsCollection */
/* global TripsCollection */
import { Component } from 'react'
import PropTypes from 'lib/propTypes'
import reactMixin from 'react-mixin'

@reactMixin.decorate(ReactMeteorData)
export default class Trip extends Component {
  static propTypes = {
    params: PropTypes.shape({
      tripId: PropTypes.string.isRequired
    }).isRequired
  }

  getMeteorData () {
    const { tripId } = this.props.params
    Meteor.subscribe('trips')
    Meteor.subscribe('requestsForMe')

    return {
      trip: TripsCollection.findOne({ _id: tripId }),
      requests: RequestsCollection.find({ tripId }).fetch()
    }
  }

  renderTripInformation () {
    if (this.data.trip) {
      return <div>
        <h3>Description</h3>
        { this.data.trip.description }
      </div>
    } else {
      return <div>Trip not found.</div>
    }
  }

  renderRequests () {
    if (this.data.requests.length) {
      return <div>
        <h4>Requests</h4>
        <ul>
          { this.data.requests.map(request => <li key={ request._id }>{ request._id }</li>) }
        </ul>
      </div>
    } else {
      return <div>
        <h4>No requests.</h4>
      </div>
    }
  }

  render () {
    return <div>
      { this.renderTripInformation() }
      { this.renderRequests() }
    </div>
  }
}
