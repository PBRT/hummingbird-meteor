/* global RequestsCollection */
/* global TripsCollection */
import { Component } from 'react'
import PropTypes from 'lib/propTypes'
import reactMixin from 'react-mixin'
import Request from 'components/request'

@reactMixin.decorate(ReactMeteorData)
export default class Trip extends Component {
  static propTypes = {
    params: PropTypes.shape({
      tripId: PropTypes.string.isRequired
    }).isRequired
  }

  getMeteorData () {
    const { tripId } = this.props.params
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
        <h4>Requests Pending</h4>
        { this.data.requests.filter(request => request.status === 0).map(request =>
            <Request key={request._id} request={request} />)}
        <h4>Requests Accepted</h4>
        { this.data.requests.filter(request => request.status === 1).map(request =>
            <Request key={request._id} request={request} />)}
        <h4>Requests Declined</h4>
        { this.data.requests.filter(request => request.status === 2).map(request =>
            <Request key={request._id} request={request} />)}
        </div>
    } else {
      return <div>
        <h4>No requests.</h4>
      </div>
    }
  }

  render () {
    return <div>
      <h1>Trip View</h1>
      { this.renderTripInformation() }
      { this.renderRequests() }
    </div>
  }
}
