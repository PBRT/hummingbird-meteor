import { Component, PropTypes } from 'react'
import {
  AppBar,
  AppCanvas,
  DatePicker,
  RaisedButton,
  Styles
} from 'material-ui'
const ThemeManager = new Styles.ThemeManager()

export default class Test extends Component {
  static displayName = 'Test'

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  constructor (props) {
    super(props)
    require('./Test.css')
  }

  render () {
    return <AppCanvas>
      <AppBar title='izziLab'/>

      <div style={{ padding: '80px' }}>
        <RaisedButton primary label='Tap' />
        <br />
        <DatePicker hintText='Portrait Dialog' />
        <br />
        <DatePicker hintText='Landscape Dialog' mode='landscape' />
      </div>
    </AppCanvas>
  }
}
