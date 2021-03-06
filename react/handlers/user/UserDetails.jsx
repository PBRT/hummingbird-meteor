import { Component } from 'react'
import PropTypes from 'lib/propTypes'
import { Row } from 'react-bootstrap'
import reactMixin from 'react-mixin'

@reactMixin.decorate(ReactMeteorData)
export default class UserPage extends Component {
  static displayName = 'UserPage'

  static propTypes = {
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired
    }).isRequired
  }
  getMeteorData () {
    return {
      user: Meteor.users.findOne(this.props.params.userId)
    }
  }
  render () {
    return <Row>
      <p>User details</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Row>
  }
}
