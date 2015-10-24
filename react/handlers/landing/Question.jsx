import { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { Link } from 'react-router'

var s = getStyle()

export default class Questions extends Component {
  static displayName = 'Questions'
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={s.container}>
        <Grid className='text-center'>
          Still have question? See our
          <Link to='faq'> FAQs </Link>or
          <Link to='security'> Security </Link>
        </Grid>
      </div>
    )
  }
}

function getStyle () {
  return {
    container: {
      backgroundColor: '#f39c12',
      padding: '50px 0px',
      fontSize: 26,
      color: 'white'
    }
  }
}
