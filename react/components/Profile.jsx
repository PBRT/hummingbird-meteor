import { Component } from 'react'
import PropTypes from 'lib/propTypes'
import { Row, Col, Image } from 'react-bootstrap'

const getFacebookPicture = function (id) {
  return `http://graph.facebook.com/${id}/picture/?type=large`
}

export default class Profile extends Component {
  static displayName = 'Profile'

  static propTypes = {
    user: PropTypes.hb.user.isRequired
  }

  render () {
    const user = this.props.user
    return <Row>
      <Col xs={12} md={4}>
        <div><Image responsive src={ getFacebookPicture(user.profile.facebookId) } alt='Profile picture' /></div>
        <div>{ user.profile.name }</div>
      </Col>
      <Col xs={12} md={8}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Col>
    </Row>
  }
}
