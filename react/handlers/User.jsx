import { Component, PropTypes } from 'react'
import reactMixin from 'react-mixin'

import Profile from 'components/Profile'

@reactMixin.decorate(ReactMeteorData)
export default class User extends Component {
  static displayName = 'User'

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

  renderNotFound () {
    return <div>User not found.</div>
  }

  renderUser () {
    return <Profile user={ this.data.user } />
  }

  render () {
    return <div>{ this.data.user
      ? this.renderUser()
      : this.renderNotFound()
    }</div>
  }
}
