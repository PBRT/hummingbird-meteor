import { Component } from 'react'
import { Grid, Col } from 'react-bootstrap'
import { copy } from 'constants/landing.constant'

var s = getStyle()

export default class Process extends Component {
  static displayName = 'Process'
  constructor (props) {
    super(props)
    this.renderTiles = this.renderTiles.bind(this)
  }
  renderTiles () {
    return copy.process.map((item, index) => {
      return (
        <Col md={3} key={index} className='text-center' style={s.tile}>
          <div style={s.imageContainer}>
            <img src={require('./assets/' + item.imgSrc)} style={s.image}/>
          </div>
          <div style={s.title}>{item.title}</div>
          <div style={s.description}>{item.description}</div>
        </Col>
      )
    })
  }
  render () {
    return (
      <div style={s.container}>
        <div style={s.subcontainer}>
          <div style={s.sectionTitle}>How it is working</div>
          <Grid style={s.container}>
            {this.renderTiles()}
          </Grid>
        </div>
      </div>
    )
  }
}

function getStyle () {
  return {
    container: {
      backgroundColor: '#18ad91'
    },
    sectionTitle: {
      marginBottom: 40,
      color: 'white',
      fontSize: 28,
      textAlign: 'center'
    },
    subcontainer: {
      padding: '50px 0px'
    },
    tile: {
      marginBottom: 30,
      color: 'white'
    },
    title: {
      marginTop: 20,
      fontSize: 28,
      textAlign: 'left'
    },
    description: {
      textAlign: 'left'
    }
  }
};
