import { Component, PropTypes } from 'react'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor (props) {
    super(props)
    require('./App.css')
  }

  render () {
    return this.props.children
  }
}
