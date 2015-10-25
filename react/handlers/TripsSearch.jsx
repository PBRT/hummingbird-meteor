/* global TripsCollection */
/* global LocationsCollection */
/* global RequestsCollection */
import { Component, PropTypes } from 'react'
import reactMixin from 'react-mixin'
import Search from 'components/search'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { styles as UI } from 'constants/styles'
import { History } from 'react-router'

var s = getStyles()

const getFacebookPicture = function (id) {
  return `http://graph.facebook.com/${id}/picture/?type=large`
}

@reactMixin.decorate(History)
@reactMixin.decorate(ReactMeteorData)
export default class TripsSearch extends Component {
  static displayName = 'TripsSearch'
  static propTypes = {
    location: PropTypes.shape({
      query: PropTypes.object.isRequired
    }).isRequired
  }
  constructor (props) {
    super(props)
    this.renderResults = this.renderResults.bind(this)
    this.createRequest = this.createRequest.bind(this)
  }

  renderResults () {
    return TripsCollection.find(this.props.location.query).map((item) => {
      const [fromLocation] = this.data.locations.filter(location => location._id === item.fromLocationId)
      const [toLocation] = this.data.locations.filter(location => location._id === item.toLocationId)
      const user = Meteor.users.findOne(item.userId)

      return <div style={s.tripContainer} key={item._id}>
        <Row>
          <Col xs={3}>
            <div><Image responsive src={ getFacebookPicture(user.profile.facebookId) } alt='Profile picture' /></div>
            <div>{user.profile.name}</div>
          </Col>
          <Col xs={6}>
            <h5>From: {fromLocation.name}</h5>
            <h5>To: {toLocation.name}</h5>
            <h5>The {item.date}</h5>
            <h5>Available space: {item.availableSize.toUpperCase()}</h5>
            <h5>{item.description}</h5>
          </Col>
          <Col xs={3}>
            <Button onClick={this.createRequest.bind(null, item._id, user._id)}>Get in touch</Button>
          </Col>
        </Row>
      </div>
    })
  }
  getMeteorData () {
    Meteor.subscribe('trips')
    Meteor.subscribe('location')
    Meteor.subscribe('requests')
    return {
      trips: TripsCollection.find().fetch(),
      locations: LocationsCollection.find().fetch(),
      requests: RequestsCollection.find().fetch()
    }
  }

  createRequest (tripId, carrierId) {
    RequestsCollection.insert({
      userId: Meteor.user()._id,
      tripId: tripId,
      carrierId: carrierId,
      status: 0
    })
    this.history.pushState(null, `/users/${Meteor.user()._id}/requests`)
  }

  render () {
    let params = this.props.location.query
    const [fromLocation] = this.data.locations.filter(location => location._id === params.fromLocationId)
    const [toLocation] = this.data.locations.filter(location => location._id === params.toLocationId)

    return <div>
      <h2> Results for trips from
        <b> {fromLocation.name}</b> to
        <b> {toLocation.name} </b>
        {params.date ? <span>the {params.date.toString()} </span> : ''}
        {params.availableSize
          ? <span>for a <b> {params.availableSize.toUpperCase()} parcel</b></span> : ''}
        </h2>
      <Search />
      <div style={s.results}>{this.renderResults()}</div>
    </div>
  }
}

function getStyles () {
  return {
    tripContainer: {
      padding: 20,
      border: '1px solid',
      borderColor: UI.primary,
      backgroundColor: UI.widgetBg,
      marginBottom: 20
    },
    results: {
      marginTop: 40
    }
  }
}
