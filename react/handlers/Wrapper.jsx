import { Component } from 'react'
import PropTypes from 'lib/propTypes'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Wrapper extends Component {
  static displayName = 'Wrapper'

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return <Grid style={{ paddingTop: '20px', paddingBottom: '20px', minHeight: 'calc(100% - 80px)' }}>
      <Row>
        <Col xs={ 12 }>{ this.props.children }</Col>
      </Row>
    </Grid>
  }
}
