import { Component } from 'react'
import { Grid, Col } from 'react-bootstrap'
import { styles as UI } from 'constants/styles'

var s = getStyle()

export default class Footer extends Component {
  static displayName = 'Footer'
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={s.container}>
        <Grid>
          <Col sm={4} style={s.col}>
            <div style={s.title}>About</div>
          </Col>
          <Col sm={4} style={s.col}>
            <div style={s.title}>Trust</div>
          </Col>
          <Col sm={4} style={s.col}>
            <div style={s.title}>Image</div>
          </Col>
        </Grid>
      </div>
    )
  }
}

function getStyle () {
  return {
    container: {
      backgroundColor: UI.primary,
      color: UI.textLight,
      textAlign: 'center'
    },
    col: {
      margin: '30px 0px'
    }
  }
}
