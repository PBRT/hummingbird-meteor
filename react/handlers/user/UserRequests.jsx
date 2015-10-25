/* global RequestsCollection */

import { Component } from 'react'
import PropTypes from 'lib/propTypes'
import { Row } from 'react-bootstrap'
import reactMixin from 'react-mixin'

@reactMixin.decorate(ReactMeteorData)
export default class UserRequests extends Component {
  static displayName = 'UserRequests'

  static propTypes = {
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired
    }).isRequired
  }
  constructor (props) {
    super(props)
    this.renderRequest = this.renderRequest.bind(this)
  }
  renderRequest () {
    return <ul>
      { this.data.requests.map(request => <li key={ request._id }>{ request._id }</li>) }
    </ul>
  }
  getMeteorData () {
    const { userId } = this.props.params
    Meteor.subscribe('requestsByMe')

    return {
      user: Meteor.users.findOne(userId),
      requests: RequestsCollection.find({ userId }).fetch()
    }
  }
  render () {
    return <Row>
      <p>User Request</p>
      <div>{this.renderRequest()}</div>
    </Row>
  }
}
