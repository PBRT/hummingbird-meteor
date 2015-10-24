import { Component } from 'react'
import _ from 'lodash'
import { Grid, Col, Button } from 'react-bootstrap'

var s = getStyle()

export default class Cta extends Component {
  static displayName = 'Cta'
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={s.container}>
        <Grid style={s.grid}>
          <Col sm={6} style={_.extend(_.clone(s.col), {borderRight: '1px solid #ccc'})}>
            <div className='text-center' style={s.title}>Sending Stuff</div>
            <div style={s.list}>
              <li>Small stuff you like (5kg max)</li>
              <li>Legal stuff</li>
              <li>Save on cost offshipping</li>
            </div>
            <div className='text-center'>
              <Button bsStyle='primary'>Cool let´s do it</Button>
            </div>
          </Col>
          <Col sm={6} style={s.col}>
            <div className='text-center' style={s.title}>Carring Stuff</div>
            <div style={s.list}>
              <li>Small stuff you like (5kg max)</li>
              <li>Legal stuff</li>
              <li>Save on cost offshipping</li>
            </div>
            <div className='text-center'>
              <Button bsStyle='primary'>Cool let´s do it</Button>
            </div>
          </Col>
        </Grid>
      </div>
    )
  }
}

function getStyle () {
  return {
    container: {
      backgroundColor: 'white'
    },
    grid: {
      margin: 0,
      padding: 0,
      width: '100%'
    },
    col: {
      padding: 0,
      paddingBottom: 50
    },
    title: {
      margin: '40px 0px',
      fontSize: 28
    },
    list: {
      padding: '0px 30px'
    }
  }
};
