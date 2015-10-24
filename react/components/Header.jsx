import { Component } from 'react'
import PropTypes from 'lib/propTypes'
import { Navbar, NavBrand, Nav, NavItem, Modal } from 'react-bootstrap'
const LoginButtons = BlazeToReact('loginButtons')

export default class Header extends Component {
  static displayName = 'Header'

  static propTypes = {
    user: PropTypes.oneOfType([PropTypes.hb.user, null]).isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
    this.handleModal = this.handleModal.bind(this)
  }

  handleModal (val) {
    this.setState({ isModalVisible: val })
  }

  renderLogin () {
    const user = this.props.user
    if (user) {
      return <Nav navbar right>
        <NavItem href={ `/user/${user._id}` }>{user.profile.name}</NavItem>
        <NavItem onClick={this.handleModal.bind(null, true)}>LOGOUT</NavItem>
      </Nav>
    } else {
      return <Nav navbar right>
        <NavItem onClick={this.handleModal.bind(null, true)}>SIGN UP / LOGIN</NavItem>
      </Nav>
    }
  }

  render () {
    return (
      <Navbar fixedTop style={{marginBottom: 0}}>
        <NavBrand>HummingBird</NavBrand>
        { this.renderLogin() }
        <Modal
          show={this.state.isModalVisible}
          onHide={this.handleModal.bind(null, false)}>
          <Modal.Body className='text-center'>
            <div style={{marginBottom: 40}}>Continue</div>
            <LoginButtons container={<div className='custom-fb'/>} style={{padding: 40}}/>
          </Modal.Body>
        </Modal>
      </Navbar>
    )
  }
}
