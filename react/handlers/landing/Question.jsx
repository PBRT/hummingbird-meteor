import { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { Link } from 'react-router'
import { styles as UI } from 'constants/styles'
import Radium from 'radium'

var s = getStyle()

@Radium
export default class Questions extends Component {
  static displayName = 'Questions'
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={s.container}>
        <span style={UI.fontSM}>
          <Grid className='text-center'>
            Still have question? See our
            <Link to='faq'> FAQs </Link>or
            <Link to='security'> Security </Link>
          </Grid>
        </span>
      </div>
    )
  }
}

function getStyle () {
  return {
    container: {
      backgroundColor: UI.primaryDark,
      padding: '50px 0px',
      color: UI.textLight
    }
  }
}
