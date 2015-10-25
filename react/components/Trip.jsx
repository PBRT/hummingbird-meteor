/* global RequestsCollection */
import { Component, PropTypes } from 'react'
import { Button, Image, Col, Row, Modal, Input } from 'react-bootstrap'
import { styles as UI } from 'constants/styles'
import { History } from 'react-router'
import reactMixin from 'react-mixin'

var s = getStyle()

const getFacebookPicture = function (id) {
  return `http://graph.facebook.com/${id}/picture/?type=large`
}

@reactMixin.decorate(History)
export default class Trip extends Component {
  static displayName = 'Trip'
  static propTypes = {
    trip: PropTypes.object.isRequired,
    fromLocation: PropTypes.object.isRequired,
    toLocation: PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
      isModalVisible: false,
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.createRequest = this.createRequest.bind(this)
  }
  handleModal (val) {
    this.setState({ isModalVisible: val })
  }
  handleChange (event) {
    this.setState({text: event.target.value})
  }
  createRequest () {
    RequestsCollection.insert({
      userId: Meteor.user()._id,
      tripId: this.props.trip._id,
      carrierId: this.props.trip.userId,
      status: 0,
      description: this.state.text
    })
    this.history.pushState(null, `/users/${Meteor.user()._id}/requests`)
  }
  render () {
    const trip = this.props.trip
    const user = Meteor.users.findOne(trip.userId)

    return <div style={s.tripContainer} key={trip._id}>
      <Row>
        <Col xs={3}>
          <div><Image responsive src={ getFacebookPicture(user.profile.facebookId) } alt='Profile picture' /></div>
          <div>{user.profile.name}</div>
        </Col>
        <Col xs={6}>
          <h5>From: {this.props.fromLocation.name}</h5>
          <h5>To: {this.props.toLocation.name}</h5>
          <h5>The {trip.date}</h5>
          <h5>Available space: {trip.availableSize.toUpperCase()}</h5>
          <h5>{trip.description}</h5>
        </Col>
        <Col xs={3}>
          <Button onClick={this.handleModal.bind(null, true)}>Get in touch</Button>
        </Col>
      </Row>
      <Modal
        show={this.state.isModalVisible}
        onHide={this.handleModal.bind(null, false)}>
        <Modal.Body className='text-center'>
          <div style={{marginBottom: 40}}>Talk a bit about you</div>
          <Input
            type='textarea'
            value={this.state.text}
            placeholder='What de you want to send'
            onChange={this.handleChange}/>
          <Button style={{marginTop: 60}}onClick={this.createRequest}>Submit</Button>
        </Modal.Body>
      </Modal>
    </div>
  }
}

function getStyle () {
  return {
    container: {
      backgroundColor: UI.primary,
      color: UI.textLight,
      textAlign: 'center'
    },
    col: {
      margin: '30px 0px'
    }
  }
}
