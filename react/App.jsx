import { Component, PropTypes } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor (props) {
    super(props)
    require('./App.css')
  }

  render () {
    return <div style={{ paddingTop: '60px' }}>
      <Header />
      { this.props.children }
      <Footer />
    </div>
  }
}
