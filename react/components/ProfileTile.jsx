import { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'lib/propTypes'
import { Row, Image, Button } from 'react-bootstrap'

const getFacebookPicture = function (id) {
  return `http://graph.facebook.com/${id}/picture/?type=large`
}

export default class ProfileTile extends Component {
  static displayName = 'ProfileTile'

  static propTypes = {
    user: PropTypes.hb.user.isRequired
  }

  render () {
    const user = this.props.user
    return <Row>
        <Link to={`/users/${this.props.user._id}`}>
        <div><Image responsive src={ getFacebookPicture(user.profile.facebookId) } alt='Profile picture' /></div>
        </Link>
        <div>{ user.profile.name }</div>
        <div><Button><Link to={`/users/${this.props.user._id}/trips`}>My Trips</Link></Button></div>
        <div style={{marginTop: 30}}><Button><Link to={`/users/${this.props.user._id}/requests`}>My Requests</Link></Button></div>
    </Row>
  }
}
