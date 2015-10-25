import { Component } from 'react'
import PropTypes from 'lib/propTypes'
import reactMixin from 'react-mixin'

import { Row, Col } from 'react-bootstrap'
import ProfileTile from 'components/ProfileTile'

@reactMixin.decorate(ReactMeteorData)
export default class User extends Component {
  static displayName = 'User'

  static propTypes = {
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired
    }).isRequired,
    children: PropTypes.node.isRequired
  }

  getMeteorData () {
    return {
      user: Meteor.users.findOne(this.props.params.userId)
    }
  }

  renderNotFound () {
    return <div>User not found.</div>
  }

  renderUser () {
    return <Row>
      <Col sm={4}>
        <ProfileTile user={ this.data.user }/>
      </Col>
      <Col sm={8}>
        { this.props.children }
      </Col>
    </Row>
  }

  render () {
    return <div>
    { this.data.user
    ? this.renderUser()
    : this.renderNotFound()}
    </div>
  }
}
