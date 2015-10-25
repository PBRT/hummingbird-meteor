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
    console.log('the', this.data.requests)

    RequestsCollection.find().map((item) => {
      console.log('item', item)
    })
  }
  getMeteorData () {
    Meteor.subscribe('requests')
    return {
      user: Meteor.users.findOne(this.props.params.userId),
      requests: RequestsCollection.find().fetch()
    }
  }
  render () {
    return <Row>
      <p>User Request</p>
      <div>{this.renderRequest()}</div>
      </Row>
  }
}
