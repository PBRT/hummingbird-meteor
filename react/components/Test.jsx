import { Component } from 'react'
import { Button } from 'react-bootstrap'

const LoginButtons = BlazeToReact('loginButtons')

export default class Test extends Component {
  static displayName = 'Test'

  render () {
    return <div>
      <LoginButtons />
      <Button>Hello world</Button>
      Hello world
    </div>
  }
}
