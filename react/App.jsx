import { Component, PropTypes } from 'react'
import reactMixin from 'react-mixin'
import Header from 'components/header'
import Footer from 'components/footer'

@reactMixin.decorate(ReactMeteorData)
export default class App extends Component {
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
    return <div style={{ paddingTop: '60px' }}>
      <Header user={ this.data.user } />
      { this.props.children }
      <Footer />
    </div>
  }
}
