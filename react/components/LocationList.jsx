import { Component } from 'react'
import PropTypes from 'lib/propTypes'

export default class LocationList extends Component {
  static displayName = 'LocationList'

  static propTypes = {
    locations: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render () {
    return <ul>
      { this.props.locations.map(location => <li key={ location._id }>{ location.name }</li>) }
    </ul>
  }
}
