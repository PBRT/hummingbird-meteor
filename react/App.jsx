import { Component } from 'react'
import PropTypes from 'lib/propTypes'
import reactMixin from 'react-mixin'
import Header from 'components/header'
import Footer from 'components/footer'

@reactMixin.decorate(ReactMeteorData)
export default class App extends Component {
  static displayName = 'App'

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor (props) {
    super(props)
    require('./App.css')
  }

  getMeteorData () {
    return {
      user: Meteor.user()
    }
  }

  render () {
    return <div style={{ height: '100%', paddingTop: '60px' }}>
      <Header user={ this.data.user } />
      { this.props.children }
      <Footer />
    </div>
  }
}
