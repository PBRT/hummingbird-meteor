import { Component } from 'react'
import { Button } from 'react-bootstrap'

const LoginButtons = BlazeToReact('loginButtons')

export default class Landing extends Component {
  static displayName = 'Landing'

  render () {
    return <div>
      <LoginButtons />
      <Button>Hello world</Button>
      Hello world
    </div>
  }
}
