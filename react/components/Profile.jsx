import { Component, PropTypes } from 'react'

export default class Profile extends Component {
  static displayName = 'Profile'

  static propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      profile: PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    }).isRequired
  }

  render () {
    return <div>{ this.props.user.profile.name }</div>
  }
}
