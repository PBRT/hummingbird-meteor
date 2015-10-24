import { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Test extends Component {
  static displayName = 'Test'

  render () {
    return <div>
      <Button>Hello world</Button>
      Hello world
    </div>
  }
}
