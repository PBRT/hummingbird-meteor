import { Component } from 'react'
import { Navbar, NavBrand, Nav, NavItem, Modal } from 'react-bootstrap'
const LoginButtons = BlazeToReact('loginButtons')

export default class Header extends Component {
  static displayName = 'Header'
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
  render () {
    return (
      <Navbar fixedTop style={{marginBottom: 0}}>
        <NavBrand>HummingBird</NavBrand>
        {Meteor.user()
          ? (
            <Nav navbar right>
              <NavItem href='/user/'>{Meteor.user().profile.name}</NavItem>
              <NavItem onClick={this.handleModal.bind(null, true)}>LOGOUT</NavItem>
            </Nav>)
          : (
          <Nav navbar right>
            <NavItem onClick={this.handleModal.bind(null, true)}>SIGN UP / LOGIN</NavItem>
          </Nav>)}
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
